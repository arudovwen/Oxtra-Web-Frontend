import React from "react";
import LeaseCarSignUp from "@/components/data/register-car/LeaseCarSignUpForm";
import PutUpYourVehicleLayout from "@/components/data/register-car/PutUpYourVehicleLayout";

const PutUpVehicle = () => {
  const putYourVehicleLayoutActivePage = "Basic information";
  return (
    <PutUpYourVehicleLayout
      putYourVehicleLayoutActivePage={putYourVehicleLayoutActivePage}
    >
      <LeaseCarSignUp />
    </PutUpYourVehicleLayout>
  );
};

export default PutUpVehicle;
