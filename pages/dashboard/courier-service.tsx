import React from 'react';
import Dashboard from '@/components/Dashboard/Dashboard';
import DashboardLayout from '@/components/Layouts/DashboardLayout';

const CourierService = () => {
  const activePage = 'Courier service';
  return (
    <DashboardLayout activePage={activePage}>
      <Dashboard />
    </DashboardLayout>
  );
};

export default CourierService;
