import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice"
import  userSlices  from "./UserSlice";

export const store = configureStore({
    reducer: {
        productsData: productSlice,
        userData : userSlices
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

