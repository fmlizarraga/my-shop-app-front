import { configureStore } from "@reduxjs/toolkit";
import { authSlice, shopSlice, uiSlice } from "./";

export const store = configureStore({
    reducer: {
        // aca van los slices ;)
        // user
        auth: authSlice.reducer,
        // products
        shop: shopSlice.reducer,
        // uiVars
        ui: uiSlice.reducer,
    }
});