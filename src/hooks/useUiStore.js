import { useDispatch, useSelector } from "react-redux";
import { onSetActiveTab, onSetAdminTab, onOpenProductEditModal, onCloseProductEditModal, onOpenDeleteDialog, onCloseDeleteDialog } from "../store";

export const useUiStore = () => {
    const { tabs, activeTab, isProductEditModalOpen, isDeleteDialogOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const setActiveTab = (tab) => {
        dispatch( onSetActiveTab(tab) );
    };

    const setAdminTab = () => {
      dispatch( onSetAdminTab() );
    };

    const openProductEditModal = () => {
      dispatch( onOpenProductEditModal() );
    };

    const closeProductEditModal = () => {
      dispatch( onCloseProductEditModal() );
    };

    const openDeleteDialog = () => {
      dispatch( onOpenDeleteDialog() );
    };

    const closeDeleteDialog = () => {
      dispatch( onCloseDeleteDialog() );
    };

  return {
    // * Props
    tabs,
    activeTab,
    isProductEditModalOpen,
    isDeleteDialogOpen,
    // * Methods
    setActiveTab,
    setAdminTab,
    openProductEditModal,
    closeProductEditModal,
    openDeleteDialog,
    closeDeleteDialog,
  };
}
