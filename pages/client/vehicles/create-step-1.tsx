import React from "react";
import PutUpYourVehicleLayout from "@/components/data/register-car/PutUpYourVehicleLayout";
import { Box } from "@chakra-ui/react";
import VehicleInformationForm from "@/components/data/register-car/VehicleInformationForm";

const step1 = () => {
  return (
    <Box mt="-50px">
      <PutUpYourVehicleLayout activePage="Vehicle">
        <VehicleInformationForm />
      </PutUpYourVehicleLayout>
    </Box>
  );
};

export default step1;
