import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

export const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/register")}>Зарегистрироваться</Button>
    </div>
  );
};
