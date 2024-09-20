import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "register",
  async (newUser, { rejectWithValue }) => {
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
        throw new Error(errorData.message || "Failed to create user");
      }

      const userData = await response.json();
      return userData;
    } catch (error:any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
  avatar?: string;
}
interface UserSice {
  loginUser: User | null;
  users: User[] | null;
}

const getStoredData = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);
  return data ? (JSON.parse(data) as T) : null;
};

const initialState: UserSice = {
  loginUser: getStoredData<User>("loginUser"),
  users: getStoredData<User[]>("users"),
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
        alert("Email or Password incorrect");
        throw new Error("Please enter a valid email or password");
      }
    },
    logoutUser: (state) => {
      localStorage.removeItem("loginUser");
      state.loginUser = null;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(registerUser.pending, (state) => {
    //   state.isLoading = true;
    // });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const userData = action.payload;

      state.users?.push(userData);
      localStorage.setItem("user", JSON.stringify(state.users));
    //   state.isLoading = false;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
    //   state.isLoading = false;
      alert("something went wrong " + action.payload);
    });
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
