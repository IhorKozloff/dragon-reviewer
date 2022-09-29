import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchMoreRocketsInfo } from "./operations";

const moreRocketsData = createReducer([],{
    [fetchMoreRocketsInfo.fulfilled]: (state, action) => {
        return state = action.payload;
    }
});

const isLoading = createReducer(false, {
    [fetchMoreRocketsInfo.pending]: () => true,
    [fetchMoreRocketsInfo.fulfilled]: () => false,
    [fetchMoreRocketsInfo.rejected]: () => false
});

const error = createReducer(null, {
    [fetchMoreRocketsInfo.rejected]: (state, action) => {
        return state = action.payload;
    },
    [fetchMoreRocketsInfo.pending]: () => null
});

export default combineReducers({
    moreRocketsData,
    isLoading,
    error
});

