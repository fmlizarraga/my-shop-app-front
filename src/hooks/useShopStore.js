import { useDispatch, useSelector } from "react-redux";
import { onSetActiveProduct } from "../store";

export const useShopStore = () => {
    const { isLoadingProducts, products, activeProduct } = useSelector( state => state.shop );
    const dispatch = useDispatch();

    const setActiveProduct = (product) => {
        dispatch( onSetActiveProduct(product) );
    };
    
    // TODO acciones para llegar al back y
    // TODO cargar, crear, editar y borrar items
  return {
        // * Props
        isLoadingProducts,
        products,
        activeProduct,
        // * Methods
        setActiveProduct,
  };
}
