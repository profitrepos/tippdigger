import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/layout";
import {
  AuthPage,
  PaymentPage,
  ProfileEditPage,
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
          <Route path="app" element={<QRpage />} />
          <Route path="app/payment" element={<PaymentPage isInside />} />
          <Route path="withdrawal" element={<WithdrawalPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="profile/edit" element={<ProfileEditPage />} />
          <Route path="*" element={<Navigate to="/app" />} />
        </Routes>
      </Layout>
    );
  } else {
    return (
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/payment" element={<PaymentPage />} />
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
