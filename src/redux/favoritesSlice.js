import { createSlice } from "@reduxjs/toolkit";


const favoritesSlice = createSlice({
    name: 'favorites',

    initialState: {
        favIds: [],
        avatarId: ''
    },

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
        },
        setHistoryState (state, action) {
            state.favIds = action.payload;
        },
        setAvatar (state, action) {
            state.avatarId = action.payload;
        },
        clearAvatar (state) {
            state.avatarId = ''
        }
    }
});

export const { addOrRemoveFavorites, clearFavorites, setHistoryState, setAvatar, clearAvatar } = favoritesSlice.actions;

export default favoritesSlice.reducer;

