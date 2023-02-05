import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userReducer";

export const store = configureStore({
    reducer: {
        userData:userReducer
    }
})

export default store; 