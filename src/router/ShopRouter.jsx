import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { AdminPage } from "../admin";
import { useAuthStore, useUiStore } from "../hooks";
import { AboutPage, CartPage, HomePage, ShopLayout, ShopPage } from "../shop";

export const ShopRouter = () => {
  const { activeTab, setAdminTab } = useUiStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.authLevel === "admin") setAdminTab();
  }, []);
  useEffect(() => {
    const page = activeTab.toLowerCase();
    navigate("/" + page);
  }, [activeTab]);
  return (
    <>
      <ShopLayout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          {user.authLevel === "admin" ? (
            <Route path="/admin" element={<AdminPage />} />
          ) : (
            <Route path="/about" element={<AboutPage />} />
          )}
          <Route path="/*" element={<Navigate to="/shop" />} />
        </Routes>
      </ShopLayout>
    </>
  );
};
