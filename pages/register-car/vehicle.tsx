import React from "react";
import PutUpYourVehicleLayout from "@/components/Layouts/PutUpYourVehicleLayout";
import VehicleInformationForm from "@/components/Forms/VehicleInformationForm";

const Vehicle = () => {
  const putYourVehicleLayoutActivePage = "Vehicle";
  return (
    <PutUpYourVehicleLayout
      putYourVehicleLayoutActivePage={putYourVehicleLayoutActivePage}
    >
      <VehicleInformationForm />
    </PutUpYourVehicleLayout>
  );
};

export default Vehicle;
