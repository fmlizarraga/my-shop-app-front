import { createSlice } from '@reduxjs/toolkit';

const pepe = {
    uid: 'abc123',
    name: 'Pepe',
    authLevel : 'user',
    adress: 'Sarmiento 77',
    phone: '+5493815123456',
    email: 'pepe@mail.com',
    picture: 'http://an-URL',
    cart: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user: {},
        errorMsg: undefined
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking',
            state.user = {},
            state.errorMsg = undefined
        },
        onLogin: ( state, /* action */ ) => {
            state.status = 'authenticated',
            state.user = pepe,
            state.errorMsg = undefined
        },
    }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin } = authSlice.actions;