import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { product, productState } from "../constant/constant";
import { RootState } from "./store";

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (catagori: string | null, { rejectWithValue }) => {
    try {
      const api = catagori === null
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${catagori}`;

      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = (await response.json()) as product[];
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const calculateTotal = (cart: product[]) => {
  const total = cart
  .reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0)
  .toFixed(2);
  return parseFloat(total);
};


const initialState: productState = {
  products: [],
  cart: [],
  total: 0,
  loading: false,
};
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<product>) => {
      const product = action.payload;
      const existingProduct = state.cart.find((x) => x.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      state.total = calculateTotal(state.cart);
    },
    removeFromCart: (state, action: PayloadAction<product>) => {
      const productId = action.payload;
      state.cart = state.cart.filter((product) => product.id !== productId.id);
      state.total = calculateTotal(state.cart);
    },
    incrementQuantity: (state, action: PayloadAction<product>) => {
      const productId = action.payload;
      const product = state.cart.find((x) => x.id === productId.id);
      if (product) {
        product.quantity++;
        state.total = calculateTotal(state.cart);
      }
    },
    decrementQuantity: (state, action: PayloadAction<product>) => {
      const productId = action.payload;
      const product = state.cart.find((x) => x.id === productId.id);
      if (product && product.quantity > 1) {
        product.quantity--;
      } else {
        state.cart = state.cart.filter((x) => x.id !== productId.id);
      }
      state.total = calculateTotal(state.cart);
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      console.error("Error fetching products:", action.payload);
    });
  },
});

export const {
  addToCart,
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} = productSlice.actions;

export const getCart = (state:RootState) => state.productsData.cart;
export default productSlice.reducer;
