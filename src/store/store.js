import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import navigationReducer from "./slice/navigationSlice";
export const store = configureStore({
    reducer:{
        theme: themeReducer,
        navigate: navigationReducer,
    }
})