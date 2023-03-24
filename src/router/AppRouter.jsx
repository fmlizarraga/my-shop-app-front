import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { useAuthStore } from "../hooks";
import { ShopRouter } from "./ShopRouter";


export const AppRouter = () => {
    const { status } = useAuthStore();
  return (
    <Routes>
        {
            ( status === 'not-authenticated' )
            ? (
                <>
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/*" element={ <Navigate to="/login" /> } />
                </>
            )
            : <Route path="/*" element={ <ShopRouter/> } />
        }
    </Routes>
  )
}
