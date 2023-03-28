import { useDispatch, useSelector } from "react-redux";
import { onSetActiveProduct, onSetFeaturedProduct } from "../store";

export const useShopStore = () => {
    const { isLoadingProducts, products, activeProduct, featuredProduct } = useSelector( state => state.shop );
    const dispatch = useDispatch();

    const setActiveProduct = (product) => {
        dispatch( onSetActiveProduct(product) );
    };

    const setFeaturedProduct = () => {
      // TODO reflect this at the backend
      dispatch( onSetFeaturedProduct() );
    };
    // TODO acciones para llegar al back y
    // TODO cargar, crear, editar y borrar items
  return {
        // * Props
        isLoadingProducts,
        products,
        activeProduct,
        featuredProduct,
        // * Methods
        setActiveProduct,
        setFeaturedProduct,
  };
}
