import React from 'react';
import ReceiverDetailsForm from '@/components/Forms/ReceiverDetailsForm';
import SendPackageLayout from '@/components/Layouts/SendPackageLayout';

const Receiver = () => {
  const sendPackageLayoutActivePage = 'Receiver Details';
  return (
    <SendPackageLayout
      sendPackageLayoutActivePage={sendPackageLayoutActivePage}
    >
      <ReceiverDetailsForm />
    </SendPackageLayout>
  );
};

export default Receiver;
