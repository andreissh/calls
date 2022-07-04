import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { addCallDataSlice } from "../reducers/addCallData";

const reducers = {
    addCallData: addCallDataSlice.reducer,
};

const rootReducer = combineReducers({
    ...reducers,
});

export const store = configureStore({
    reducer: rootReducer,
});
