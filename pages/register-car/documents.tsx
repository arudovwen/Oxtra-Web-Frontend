import React from "react";
import PutUpYourVehicleLayout from "@/components/data/register-car/PutUpYourVehicleLayout";
import DocumentForm from "@/components/data/register-car/DocumentForm";

const Document = () => {
  const putYourVehicleLayoutActivePage = "Documents";
  return (
    <PutUpYourVehicleLayout
      putYourVehicleLayoutActivePage={putYourVehicleLayoutActivePage}
    >
      <DocumentForm />
    </PutUpYourVehicleLayout>
  );
};

export default Document;
