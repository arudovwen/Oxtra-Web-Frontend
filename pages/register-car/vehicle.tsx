import React from "react";
import PutUpYourVehicleLayout from "@/components/data/register-car/PutUpYourVehicleLayout";
import VehicleInformationForm from "@/components/data/register-car/VehicleInformationForm";

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
