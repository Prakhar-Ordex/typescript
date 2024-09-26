"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCart = exports.incrementQuantity = exports.decrementQuantity = exports.clearCart = exports.addToCart = exports.productSlice = exports.fetchProducts = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.fetchProducts = (0, toolkit_1.createAsyncThunk)("fetchProducts", (catagori_1, _a) => __awaiter(void 0, [catagori_1, _a], void 0, function* (catagori, { rejectWithValue }) {
    try {
        const api = catagori === null
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${catagori}`;
        const response = yield fetch(api);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = (yield response.json());
        return data;
    }
    catch (error) {
        return rejectWithValue(error.message || "Something went wrong");
    }
}));
const calculateTotal = (cart) => {
    const total = cart
        .reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0)
        .toFixed(2);
    return parseFloat(total);
};
const initialState = {
    products: [],
    cart: [],
    total: 0,
    loading: false,
};
exports.productSlice = (0, toolkit_1.createSlice)({
    name: "productSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find((x) => x.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            }
            else {
                state.cart.push(Object.assign(Object.assign({}, product), { quantity: 1 }));
            }
            state.total = calculateTotal(state.cart);
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.cart = state.cart.filter((product) => product.id !== productId.id);
            state.total = calculateTotal(state.cart);
        },
        incrementQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.cart.find((x) => x.id === productId.id);
            if (product) {
                product.quantity++;
                state.total = calculateTotal(state.cart);
            }
        },
        decrementQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.cart.find((x) => x.id === productId.id);
            if (product && product.quantity > 1) {
                product.quantity--;
            }
            else {
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
        builder.addCase(exports.fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(exports.fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(exports.fetchProducts.rejected, (state, action) => {
            state.loading = false;
            console.error("Error fetching products:", action.payload);
        });
    },
});
_a = exports.productSlice.actions, exports.addToCart = _a.addToCart, exports.clearCart = _a.clearCart, exports.decrementQuantity = _a.decrementQuantity, exports.incrementQuantity = _a.incrementQuantity, exports.removeFromCart = _a.removeFromCart;
exports.default = exports.productSlice.reducer;
