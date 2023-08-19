import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isOpen:false
}
const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers : {
        close:(state) => {
            state.isOpen = false
        },
        open:(state) => {
            state.isOpen = true
        },
    }
})
export const {close,open} = modalSlice.actions
export default modalSlice.reducer