import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: '',
    password: '',
};

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

export const {} = slice.reducer;
