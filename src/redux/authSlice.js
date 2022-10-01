import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    email: null,
    token: null,
    id: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser (state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
        changeEmail(state, action) {
            state.email = action.payload;
        }
        
    }
});

export const { setUser, removeUser, changeEmail } = userSlice.actions;

export default userSlice.reducer;

