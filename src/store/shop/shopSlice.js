import { createSlice } from '@reduxjs/toolkit';

// ! Temporal !
const tempProducts = [
    {
      id: '0001',
      name: 'Cellphone',
      description: 'A new phone!',
      price: 800,
      badge: '25% OFF',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/20191227_iPhone_11_Pro_2.jpg',
      tags: ['technology','new','2023']
    },
    {
      id: '0002',
      name: 'laptop',
      description: 'A portable computer',
      price: 1500,
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Macbook_Air_M1_Silver_PNG.png',
      tags: ['technology','new','2022']
    },
    {
      id: '0003',
      name: 'hoodie',
      description: 'Warm and comfy!',
      price: 30,
      badge: 'New!',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Sudadera_urban.jpg',
      tags: ['clothing','winter','urban']
    },
    {
      id: '0004',
      name: 'Running shoes',
      description: 'Run faster and longer!',
      price: 120,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg',
      tags: ['clothing','sports','running']
    },
  ]
  // ! Temporal !

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        isLoadingProducts: false,
        products: tempProducts,
        activeProduct: null
    },
    reducers: {
        onSetActiveProduct: ( state, { payload } ) => {
            state.activeProduct = payload;
        },
        // TODO create, update, delete
        onLoadProducts: ( state, { payload = [] } ) => {
            state.isLoadingProducts = false;
            state.products = payload;
        },
        onClearProducts: ( state ) => {
            state.isLoadingProducts = false;
            state.products = [];
            state.activeProduct = null;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveProduct, onLoadProducts, onClearProducts } = shopSlice.actions;