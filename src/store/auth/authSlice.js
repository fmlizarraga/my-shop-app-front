import { createSlice } from '@reduxjs/toolkit';

const pepe = {
    uid: 'abc123',
    name: 'Pepe',
    authLevel : 'admin', // user admin
    adress: 'Sarmiento 77',
    phone: '+5493815123456',
    email: 'pepe@mail.com',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Jake_LaTurner_Congressional_ID_photo_%28117th%29.jpg',
    cart: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'authenticated', // authenticated not-authenticated checking
        user: pepe,
        errorMsg: undefined
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking',
            state.user = {},
            state.errorMsg = undefined
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated',
            state.user = payload,
            state.errorMsg = undefined
        },
    }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin } = authSlice.actions;