import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
    initialState:{
        activeNav:0,
    },
    name:"mainSlice",
    reducers:{
        CHANGE_INDEX:(state, action) => {
            state.activeNav = action.payload
        }
    }
})
export default mainSlice.reducer;
export const {CHANGE_INDEX} = mainSlice.actions;