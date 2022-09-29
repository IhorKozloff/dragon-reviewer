import { createSlice } from "@reduxjs/toolkit";


const favoritesSlice = createSlice({
    name: 'favorites',

    initialState: {favIds: []},

    reducers: {

        addOrRemoveFavorites (state, action) {

            const existingItem = state.favIds.find(item => item === action.payload);

            if (existingItem !== undefined) {
                state.favIds = state.favIds.filter(item => item !== action.payload);
            } else {
                state.favIds = [...state.favIds, action.payload];
            }
        },
        clearFavorites (state) {
            state.favIds = []
        }
    }
});

export const { addOrRemoveFavorites, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;

