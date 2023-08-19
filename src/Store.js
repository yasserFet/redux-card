import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/Cardslice"
import modalReducer from "./features/modulSlice" 
 export const store = configureStore({
    reducer:{
        card:cardReducer,
        modal:modalReducer

    }
})