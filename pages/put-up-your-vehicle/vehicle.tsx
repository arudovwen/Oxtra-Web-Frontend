import React from 'react';
import PutUpYourVehicleLayout from '@/components/Layout/PutUpYourVehicleLayout';
import VehicleInformationForm from '@/components/Forms/VehicleInformationForm';

const Vehicle = () => {
  const putYourVehicleLayoutActivePage = 'Vehicle';
  return (
    <PutUpYourVehicleLayout
      putYourVehicleLayoutActivePage={putYourVehicleLayoutActivePage}
    >
      <VehicleInformationForm />
    </PutUpYourVehicleLayout>
  );
};

export default Vehicle;
