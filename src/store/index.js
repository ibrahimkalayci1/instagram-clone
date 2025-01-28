import { configureStore } from "@reduxjs/toolkit";
import auth from "store/auth"

const store = configureStore({
    reducer: {
        auth:auth
    }
})

export default store;