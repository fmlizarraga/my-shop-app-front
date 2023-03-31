import { useDispatch, useSelector } from "react-redux";
import { onSetActiveProduct, onSetFeaturedProduct, onAddNewProduct, onUpdateProduct, onDeleteProduct } from "../store";

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

    const startSavingProduct = (product) => {
      if(product.id) {
        // update
        // TODO intentar actualizarlo en el back
        dispatch( onUpdateProduct(product) );
      }
      else {
        // create
        // TODO reemplazar esto por un objeto del back
        const newProduct = {
          id: new Date().valueOf().toString(),
          ...product,
        }
        dispatch( onAddNewProduct(newProduct) );
      }
    };

    const startDeletingProduct = () => {
      // TODO intentar llegar al back y borrar el producto ahi
      dispatch( onDeleteProduct() );
    };

  return {
        // * Props
        isLoadingProducts,
        products,
        activeProduct,
        featuredProduct,
        // * Methods
        setActiveProduct,
        setFeaturedProduct,
        startSavingProduct,
        startDeletingProduct,
  };
}
