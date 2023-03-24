import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        tabs: ['Home', 'Shop', 'About'],
        activeTab: 'Home',
    },
    reducers: {
        onSetActiveTab: ( state, { payload } ) => {
            state.activeTab = payload;
        },
        onSetAdminTab: ( state ) => {
            state.tabs = ['Home', 'Shop', 'Admin']
        },
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveTab, onSetAdminTab } = uiSlice.actions;