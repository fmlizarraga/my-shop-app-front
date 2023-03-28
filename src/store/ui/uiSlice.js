import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        tabs: ['Home', 'Shop', 'About'],
        activeTab: 'Home',
        isProductEditModalOpen: false,
    },
    reducers: {
        onSetActiveTab: ( state, { payload } ) => {
            state.activeTab = payload;
        },
        onSetAdminTab: ( state ) => {
            state.tabs = ['Home', 'Shop', 'Admin']
        },
        onOpenProductEditModal: ( state ) => {
            state.isProductEditModalOpen = true;
        },
        onCloseProductEditModal: ( state ) => {
            state.isProductEditModalOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    onSetActiveTab, 
    onSetAdminTab, 
    onOpenProductEditModal, 
    onCloseProductEditModal, 
} = uiSlice.actions;