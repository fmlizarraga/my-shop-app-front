import { createSlice } from '@reduxjs/toolkit';

const pepe = {
    uid: 'abc123',
    name: 'Pepe',
    authLevel : 'user', // user admin
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
        onAddToCart: ( state, { payload } ) => {
            const found = state.user.cart.find(product => product.id === payload.id);
            if(found) state.user.cart = state.user.cart.map(product => {
                if(product.id === payload.id) return { ...payload, quantity: product.quantity + 1 }
                else return product;
            });
            else state.user.cart.push({...payload, quantity:1});
        },
    }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onAddToCart } = authSlice.actions;