import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        tabs: ['Home', 'Shop', 'About'],
        activeTab: 'Home',
        isProductEditModalOpen: false,
        isDeleteDialogOpen: false,
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
        onOpenDeleteDialog: ( state ) => {
            state.isDeleteDialogOpen = true;
        },
        onCloseDeleteDialog: ( state ) => {
            state.isDeleteDialogOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    onSetActiveTab, 
    onSetAdminTab, 
    onOpenProductEditModal, 
    onCloseProductEditModal, 
    onOpenDeleteDialog, 
    onCloseDeleteDialog, 
} = uiSlice.actions;