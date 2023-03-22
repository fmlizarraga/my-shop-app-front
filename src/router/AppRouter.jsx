import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { ShopPage } from "../shop"

const authStatus = "authenticated"

export const AppRouter = () => {
  return (
    <Routes>
        {
            ( authStatus === 'not-authenticated' )
            ? (
                <>
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/*" element={ <Navigate to="/login" /> } />
                </>
            )
            : (
                <>
                    <Route path="/" element={ <ShopPage/> } />
                    <Route path="/*" element={ <Navigate to="/" /> } />
                </>
            )
        }
    </Routes>
  )
}
