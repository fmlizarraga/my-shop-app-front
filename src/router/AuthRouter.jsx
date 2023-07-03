import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useUiStore } from "../hooks";
import { AuthLayout, LoginPage } from "../auth";
import { AboutPage, HomePage, ShopPage } from "../shop";

export const AuthRouter = () => {
  const { activeTab } = useUiStore();
  const navigate = useNavigate();
  useEffect(() => {
    const page = activeTab.toLowerCase();
    navigate("/" + page);
  }, [activeTab]);
  return (
    <>
      <AuthLayout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </AuthLayout>
    </>
  );
};
