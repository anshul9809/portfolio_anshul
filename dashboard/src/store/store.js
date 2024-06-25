import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import forgotPasswordResetSlice from "./slices/forgotPasswordResetSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        forgotPassword: forgotPasswordResetSlice,
    }
});