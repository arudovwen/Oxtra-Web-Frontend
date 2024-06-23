import React from "react";
import SignUpForm from "@/components/constants/forms/SignUpForm";
import AlterFooter from "@/layout/NonAuthLayout/Footers/AlterFooter";

const index = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex justify-center items-center">
        <SignUpForm />
      </div>

      <AlterFooter />
    </div>
  );
};

export default index;
