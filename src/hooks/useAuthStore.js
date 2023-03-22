import { useDispatch, useSelector } from "react-redux"
import { onChecking, onLogin } from "../store";

export const useAuthStore = () => {
    const {user, status, errorMsg} = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch( onChecking )
        // TODO llegar al backend y tratar de hacer el login 
        // para recuperar en usuario
        // * si funciona
        const user = {
            // aca van los datos recuparados del back
        }
        dispatch( onLogin(user) );
        // ! si falla
        // logout con mensaje de error (no implementado aun!)
    };

    return {
        // * Props
        user,
        status,
        errorMsg,
        // * Methods
        startLogin
    }
}
