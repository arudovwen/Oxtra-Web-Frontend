import React from "react";
import LoginForm from "@/components/constants/forms/LoginForm";
import AlterFooter from "@/layout/NonAuthLayout/Footers/AlterFooter";

const Login = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex justify-center items-center">
        <LoginForm />
      </div>

      <AlterFooter />
    </div>
  );
};

export default Login;
