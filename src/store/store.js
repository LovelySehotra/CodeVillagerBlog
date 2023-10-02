import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"

const store = configureStore({
    reducer:{
        auth : authSlice,
        // add more slice for post
    }
});
export default store;