import React from 'react';
import LeaseCarSignUp from '@/components/Forms/LeaseCarSignUpForm';
import PutUpYourVehicleLayout from '@/components/Layouts/PutUpYourVehicleLayout';

const PutUpVehicle = () => {
  const putYourVehicleLayoutActivePage = 'Basic information';
  return (
    <PutUpYourVehicleLayout
      putYourVehicleLayoutActivePage={putYourVehicleLayoutActivePage}
    >
      <LeaseCarSignUp />
    </PutUpYourVehicleLayout>
  );
};

export default PutUpVehicle;
