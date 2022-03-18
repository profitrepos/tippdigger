import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

import Layout from "./layout/layout";
import { AuthForm, IRegistrationForm } from "./models/User";
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
import {
  chekAuth,
  createUser,
  login,
  logout,
  selectUserData,
} from "./store/user/userSlice";

function App() {
  const userData = useAppSelector(selectUserData);

  const dispatch = useAppDispatch();

  const handleSignup = (formData: IRegistrationForm) => {
    dispatch(createUser(formData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogin = (formData: AuthForm) => {
    dispatch(login(formData));
  };

  useEffect(() => {
    const initApp = () => {
      dispatch(chekAuth());
    };

    initApp();
  }, [dispatch]);

  if (userData) {
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
        <Route path="/auth" element={<AuthPage login={handleLogin} />} />
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
