import React from "react";
import PutUpYourVehicleLayout from "@/components/data/register-car/PutUpYourVehicleLayout";
import { Box } from "@chakra-ui/react";
import DocumentForm from "@/components/data/register-car/DocumentForm";

const step3 = () => {
  return (
    <Box mt="-50px">
      <PutUpYourVehicleLayout activePage="Documents">
        <DocumentForm />
      </PutUpYourVehicleLayout>
    </Box>
  );
};

export default step3;
