import { useDispatch, useSelector } from "react-redux";
import { onSetActiveTab, onSetAdminTab } from "../store";

export const useUiStore = () => {
    const { tabs, activeTab } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const setActiveTab = (tab) => {
        dispatch( onSetActiveTab(tab) );
    };

    const setAdminTab = () => {
      dispatch( onSetAdminTab() );
    };

  return {
    // * Props
    tabs,
    activeTab,
    // * Methods
    setActiveTab,
    setAdminTab,
  };
}
