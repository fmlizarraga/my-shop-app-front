import { useDispatch, useSelector } from "react-redux";
import { onSetActiveTab, onSetAdminTab, onOpenProductEditModal, onCloseProductEditModal } from "../store";

export const useUiStore = () => {
    const { tabs, activeTab, isProductEditModalOpen } = useSelector( state => state.ui );
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

  return {
    // * Props
    tabs,
    activeTab,
    isProductEditModalOpen,
    // * Methods
    setActiveTab,
    setAdminTab,
    openProductEditModal,
    closeProductEditModal,
  };
}
