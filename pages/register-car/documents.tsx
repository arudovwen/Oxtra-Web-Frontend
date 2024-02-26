import React from 'react';
import PutUpYourVehicleLayout from '@/components/Layouts/PutUpYourVehicleLayout';
import DocumentForm from '@/components/Forms/DocumentForm';

const Document = () => {
  const putYourVehicleLayoutActivePage = 'Documents';
  return (
    <PutUpYourVehicleLayout
      putYourVehicleLayoutActivePage={putYourVehicleLayoutActivePage}
    >
      <DocumentForm />
    </PutUpYourVehicleLayout>
  );
};

export default Document;
