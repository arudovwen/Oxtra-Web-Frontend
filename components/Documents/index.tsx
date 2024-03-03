import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { getAllVehiclesDocuments } from "@/services/vehicleservices";
import { useState, useEffect } from "react";

const Documents = () => {
  const { token } = useAuth();
  const [documents, setDocuments] = useState([]);

  const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    getAllVehiclesDocuments(config)
      .then((res) => {
        setDocuments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Documents</div>;
};

export default Documents;
