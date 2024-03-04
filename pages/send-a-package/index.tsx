import React from "react";
import SenderDetialsForm from "@/components/constants/forms/SenderDetailsForm";
import SendPackageLayout from "@/components/Layouts/SendPackageLayout";

const SendPackage = () => {
  const sendPackageLayoutActivePage = "Sender Details";
  return (
    <SendPackageLayout
      sendPackageLayoutActivePage={sendPackageLayoutActivePage}
    >
      <SenderDetialsForm />
    </SendPackageLayout>
  );
};

export default SendPackage;
