import React from "react";
import PutUpYourVehicleLayout from "@/components/data/register-car/PutUpYourVehicleLayout";
import ImagesForm from "@/components/data/register-car/ImagesForm";

const Images = () => {
  const putYourVehicleLayoutActivePage = "Images";
  return (
    <PutUpYourVehicleLayout
      putYourVehicleLayoutActivePage={putYourVehicleLayoutActivePage}
    >
      <ImagesForm />
    </PutUpYourVehicleLayout>
  );
};

export default Images;
