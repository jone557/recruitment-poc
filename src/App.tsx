import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppLayout, AuthLayout } from "./layouts";
import { DummyPage, HomePage, LoginPage, RegisterPage } from "./containers";

function App() {
  const isAuth = localStorage.getItem("token");

  return (
    <BrowserRouter>
      {isAuth ? (
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dummy" element={<DummyPage />} />
          </Routes>
        </AppLayout>
      ) : (
        <AuthLayout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </AuthLayout>
      )}
    </BrowserRouter>
  );
}

export default App;
