import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { AdminPage } from "../admin";
import { useAuthStore, useUiStore } from "../hooks";
import { AboutPage, HomePage, ShopLayout, ShopPage } from "../shop";

export const ShopRouter = () => {
    const { activeTab, setAdminTab } = useUiStore();
    const { user } = useAuthStore();
    const navigate = useNavigate();
    useEffect(() => {
        if( user.authLevel === 'admin' ) setAdminTab();
    }, []);
    useEffect(() => {
        if(activeTab === 'Shop') navigate('/shop');
        else if(activeTab === 'About') navigate('/about');
        else if(activeTab === 'Admin') navigate('/admin');
        else if(activeTab === 'Home') navigate('/');
    },[activeTab]);
  return (
    <>
        <ShopLayout>
            <Routes>
                <Route path="/shop" element={ <ShopPage/> } />
                <Route path="/about" element={ <AboutPage/> } />
                { user.authLevel === 'admin'
                    ? <Route path="/admin" element={ <AdminPage/> } />
                    : <Route path="/about" element={ <AboutPage/> } />
                }
                <Route path="/*" element={ <HomePage/> } />
            </Routes>
        </ShopLayout>
    </>
  )
}
