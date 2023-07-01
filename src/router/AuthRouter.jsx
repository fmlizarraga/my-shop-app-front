import React from "react";
import { AuthLayout, LoginPage } from "../auth";
import { Navigate, Route, Routes } from "react-router-dom";

export const AuthRouter = () => {
  return (
    <>
      <AuthLayout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthLayout>
    </>
  );
};
