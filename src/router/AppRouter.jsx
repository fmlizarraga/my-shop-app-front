import { Navigate, Route, Routes } from "react-router-dom";

import { useAuthStore } from "../hooks";
import { ShopRouter } from "./ShopRouter";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  const { status } = useAuthStore();
  return (
    <Routes>
      {status === "not-authenticated" ? (
        <Route path="/*" element={<AuthRouter />} />
      ) : (
        <Route path="/*" element={<ShopRouter />} />
      )}
    </Routes>
  );
};
