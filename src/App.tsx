import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { logout, signUp, useAuth } from "./firebase";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const currentUser = useAuth();

  const handleSignup = async (email: string, password: string) => {
    try {
      setLoading(true);
      await signUp(email, password);
    } catch (error) {
      window.alert(JSON.stringify(error));
      setError("error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  console.log("loading ---> ", loading);
  console.log("user ---> ", currentUser);
  console.log("error ---> ", error);

  if (currentUser) {
    return (
      <Layout>
        <Routes>
          <Route path="app" element={<QRpage />} />
          <Route path="app/payment" element={<PaymentPage isInside />} />
          <Route path="withdrawal" element={<WithdrawalPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route
            path="profile"
            element={<ProfilePage logout={handleLogout} />}
          />
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
          element={<RegisterPage signUp={handleSignup} />}
        />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    );
  }
}

export default App;
