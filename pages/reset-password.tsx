import React from "react";
import AlterFooter from "@/layout/NonAuthLayout/Footers/AlterFooter";
import ResetPasswordForm from "@/components/constants/forms/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex justify-center items-center">
        <ResetPasswordForm />
      </div>

      <AlterFooter />
    </div>
  );
};

export default ResetPassword;
