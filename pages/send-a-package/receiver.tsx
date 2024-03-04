import React from "react";
import ReceiverDetailsForm from "@/components/constants/forms/ReceiverDetailsForm";
import SendPackageLayout from "@/components/Layouts/SendPackageLayout";

const Receiver = () => {
  const sendPackageLayoutActivePage = "Receiver Details";
  return (
    <SendPackageLayout
      sendPackageLayoutActivePage={sendPackageLayoutActivePage}
    >
      <ReceiverDetailsForm />
    </SendPackageLayout>
  );
};

export default Receiver;
