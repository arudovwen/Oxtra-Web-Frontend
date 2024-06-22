import React from "react";
import LeaseCarSignUp from "@/components/data/register-car/LeaseCarSignUpForm";
import PutUpYourVehicleLayout from "@/components/data/register-car/PutUpYourVehicleLayout";

const PutUpVehicle = () => {
  return (
    <PutUpYourVehicleLayout>
      <LeaseCarSignUp />
    </PutUpYourVehicleLayout>
  );
};

export default PutUpVehicle;
