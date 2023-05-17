import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { getAllVehicles } from '@/services/vehicleservices';
import { useState } from 'react';

const Documents = () => {
  const { token } = useAuth();
  const [documents, setDocuments] = useState([]);

  const config = { headers: { Authorization: `Bearer ${token}` } };

  getAllVehicles(config)
    .then((res) => {
      console.log('res', res);
    })
    .catch((err) => {
      console.log(err);
    });

  return <div>Documents</div>;
};

export default Documents;
