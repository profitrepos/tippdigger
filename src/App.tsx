import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/layout";
import {
  AuthPage,
  ProfilePage,
  QRpage,
  RegisterPage,
  TransactionsPage,
  WithdrawalPage,
} from "./pages";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  if (isAuth) {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<QRpage />} />
          <Route path="/withdrawal" element={<WithdrawalPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    );
  } else {
    return (
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/register"
          element={<RegisterPage setIsAuth={setIsAuth} />}
        />
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    );
  }
}

export default App;
