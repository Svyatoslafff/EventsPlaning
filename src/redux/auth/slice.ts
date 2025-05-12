import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state) {
            state.isLoggedIn = true;
        },
        logOut(state) {
            state.isLoggedIn = false;
        },
    },
});

export const { logIn, logOut } = slice.actions;
