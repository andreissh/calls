import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const addCallDataSlice = createSlice({
    name: "addCallData",
    initialState,
    reducers: {
        addCallDataReducer(state, action) {
            return [...action.payload];
        },
    },
});

export const { addCallDataReducer } = addCallDataSlice.actions;
export default addCallDataSlice.reducer;
