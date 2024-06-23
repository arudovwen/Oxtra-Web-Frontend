import React from "react";
import PutUpYourVehicleLayout from "@/components/data/register-car/PutUpYourVehicleLayout";
import { Box } from "@chakra-ui/react";
import ImagesForm from "@/components/data/register-car/ImagesForm";

const step2 = () => {
  return (
    <Box mt="-50px">
      <PutUpYourVehicleLayout activePage="Images">
        <ImagesForm />
      </PutUpYourVehicleLayout>
    </Box>
  );
};

export default step2;
