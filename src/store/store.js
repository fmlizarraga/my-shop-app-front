import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./";

export const store = configureStore({
    reducer: {
        // aca van los slices ;)
        // user
        auth: authSlice.reducer,
        // products
        // uiVars
    }
});