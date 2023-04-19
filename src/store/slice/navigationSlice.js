import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name: 'navigate',
    initialState: {
        isOpened: false
    },
    reducers:{
        toggleNavigation: (state)=>{
            state.isOpened = !state.isOpened
        }
    }
})
export const {toggleNavigation} = navigationSlice.actions;
export default navigationSlice.reducer;