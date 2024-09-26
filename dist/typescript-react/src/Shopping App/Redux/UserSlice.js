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
exports.addCart = exports.deleteUser = exports.editProfile = exports.logoutUser = exports.loginUser = exports.userSlice = exports.registerUser = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.registerUser = (0, toolkit_1.createAsyncThunk)("register", (newUser_1, _a) => __awaiter(void 0, [newUser_1, _a], void 0, function* (newUser, { rejectWithValue }) {
    try {
        const response = yield fetch("https://api.escuelajs.co/api/v1/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });
        if (!response.ok) {
            const errorData = yield response.json();
            throw new Error(errorData.message || "Failed to create user");
        }
        const userData = yield response.json();
        return userData;
    }
    catch (error) {
        return rejectWithValue(error.message || "Something went wrong");
    }
}));
const initialState = {
    loginUser: JSON.parse(localStorage.getItem("loginUser") || "null"),
    users: JSON.parse(localStorage.getItem("users") || "[]"),
};
exports.userSlice = (0, toolkit_1.createSlice)({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            var _a;
            const data = action.payload;
            let findUser = (_a = state === null || state === void 0 ? void 0 : state.users) === null || _a === void 0 ? void 0 : _a.find((item) => item.email === data.email && item.password === data.password);
            if (findUser) {
                state.loginUser = findUser;
                localStorage.setItem("loginUser", JSON.stringify(findUser));
            }
            else {
                alert("Email or Password incorrect");
                throw new Error("Please enter a valid email or password");
            }
        },
        editProfile: (state, action) => {
            var _a, _b;
            const data = action.payload;
            const findUserIndex = (_a = state === null || state === void 0 ? void 0 : state.users) === null || _a === void 0 ? void 0 : _a.findIndex((item) => item.email === data.email);
            if (findUserIndex !== -1 && findUserIndex != undefined) {
                (_b = state.users) === null || _b === void 0 ? void 0 : _b.splice(findUserIndex, 1, data);
                state.loginUser = data;
                localStorage.setItem("users", JSON.stringify(state.users));
                localStorage.setItem("loginUser", JSON.stringify(state.loginUser));
            }
            else {
                alert("User not found");
                throw new Error("User not found");
            }
        },
        logoutUser: (state) => {
            localStorage.removeItem("loginUser");
            state.loginUser = null;
        },
        deleteUser: (state, action) => {
            var _a, _b;
            const user = action.payload;
            const findIndex = (_a = state.users) === null || _a === void 0 ? void 0 : _a.findIndex((item) => item.id === (user === null || user === void 0 ? void 0 : user.id));
            if (findIndex !== -1 && findIndex != undefined) {
                state.loginUser = null;
                (_b = state.users) === null || _b === void 0 ? void 0 : _b.splice(findIndex, 1);
                localStorage.setItem("users", JSON.stringify(state.users));
                localStorage.removeItem("loginUser");
                alert("User deleted successfully");
            }
        },
        addCart: (state, action) => {
            console.log(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(exports.registerUser.fulfilled, (state, action) => {
            var _a;
            const userData = action.payload;
            (_a = state.users) === null || _a === void 0 ? void 0 : _a.push(userData);
            localStorage.setItem("users", JSON.stringify(state.users));
        });
        builder.addCase(exports.registerUser.rejected, (_, action) => {
            alert("something went wrong " + action.payload);
        });
    },
});
_a = exports.userSlice.actions, exports.loginUser = _a.loginUser, exports.logoutUser = _a.logoutUser, exports.editProfile = _a.editProfile, exports.deleteUser = _a.deleteUser, exports.addCart = _a.addCart;
exports.default = exports.userSlice.reducer;
