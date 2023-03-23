import { useDispatch, useSelector } from "react-redux";
import { onSetActiveTab } from "../store";

export const useUiStore = () => {
    const { tabs, activeTab } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const setActiveTab = (tab) => {
        dispatch( onSetActiveTab(tab) );
    };

  return {
    // * Props
    tabs,
    activeTab,
    // * Methods
    setActiveTab,
  };
}
