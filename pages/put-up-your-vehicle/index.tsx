import React from 'react';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import LeaseCarSignUp from '@/components/Forms/LeaseCarSignUpForm';
import AlterFooter from '@/components/Footer/AlterFooter';
import PutUpYourVehicleLayout from '@/components/Layout/PutUpYourVehicleLayout';

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
