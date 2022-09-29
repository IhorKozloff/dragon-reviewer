import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchMainRocketInfo } from "./operations";

const mainRocketData = createReducer([],{
    [fetchMainRocketInfo.fulfilled]: (state, action) => {
        return state = action.payload;
    }
});

const isLoading = createReducer(false, {
    [fetchMainRocketInfo.pending]: () => true,
    [fetchMainRocketInfo.fulfilled]: () => false,
    [fetchMainRocketInfo.rejected]: () => false
});

const error = createReducer(null, {
    [fetchMainRocketInfo.rejected]: (state, action) => {
        return state = action.payload;
    },
    [fetchMainRocketInfo.pending]: () => null
});

export default combineReducers({
    mainRocketData,
    isLoading,
    error
});

