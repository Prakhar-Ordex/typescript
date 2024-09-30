import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  MyKnownError,
  registerData,
  User,
  UserSice,
} from "../constant/constant";
import { getCart } from "./ProductSlice";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk<
  any,
  registerData,
  { rejectValue: MyKnownError }
>("register", async (newUser, { rejectWithValue }) => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (!response.ok) {
      const errorData = await response.json();
      toast.warning(errorData.message)
      throw new Error(errorData.message || "Failed to create user");
    }

    const userData = await response.json();
    return userData;
  } catch (error: any) {
    return rejectWithValue(error.message || "Something went wrong");
  }
});

const initialState: UserSice = {
  loginUser: JSON.parse(localStorage.getItem("loginUser") || "null"),
  users: JSON.parse(localStorage.getItem("users") || "[]"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      const data = action.payload;
      let findUser = state?.users?.find(
        (item) => item.email === data.email && item.password === data.password
      );
      if (findUser) {
        state.loginUser = findUser;
        localStorage.setItem("loginUser", JSON.stringify(findUser));
      } else {
        toast.error("Email or password incorrect")
        throw new Error("Please enter a valid email or password");
      }
    },

    editProfile: (state, action: PayloadAction<User>) => {
      const data = action.payload;
      const findUserIndex: number | undefined = state?.users?.findIndex(
        (item) => item.email === data.email
      );
      if (findUserIndex !== -1 && findUserIndex != undefined) {
        state.users?.splice(findUserIndex, 1, data);
        state.loginUser = data;
        localStorage.setItem("users", JSON.stringify(state.users));
        localStorage.setItem("loginUser", JSON.stringify(state.loginUser));
      } else {
        toast.error("User not found");
        throw new Error("User not found");
      }
    },

    logoutUser: (state) => {
      localStorage.removeItem("loginUser");
      state.loginUser = null;
    },
    deleteUser: (state, action: PayloadAction<User | null>) => {
      const user = action.payload;
      const findIndex: number | undefined = state.users?.findIndex(
        (item) => item.id === user?.id
      );
      if (findIndex !== -1 && findIndex != undefined) {
        state.loginUser = null;
        state.users?.splice(findIndex, 1);
        localStorage.setItem("users", JSON.stringify(state.users));
        localStorage.removeItem("loginUser");
        toast.success("User deleted successfully");
      }
    },
    addCart: (state, action) => {
      const cartData = getCart(action.payload.state);
      if (state.loginUser) {
        const findUser = state.users?.find(
          (item) => item.id === state.loginUser?.id
        );
        if (findUser) {
          findUser.cart = cartData;
          state.loginUser.cart = cartData;
          localStorage.setItem("users", JSON.stringify(state.users));
          localStorage.setItem("loginUser", JSON.stringify(state.loginUser));
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const userData = action.payload;
      state.users?.push(userData);
      localStorage.setItem("users", JSON.stringify(state.users));
    });
    builder.addCase(registerUser.rejected, (_, action) => {
      toast.warning("something went wrong " + action.payload);
      throw new Error("something went wrong");
    });
  },
});

export const { loginUser, logoutUser, editProfile, deleteUser, addCart } =
  userSlice.actions;
export default userSlice.reducer;
