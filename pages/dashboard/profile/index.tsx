import Typography from '@/components/Typography';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import ProfileForm from '@/components/Forms/ProfileForm';
import { useState } from 'react';
import VehiclesCard from '@/components/VehiclesCard';

const Profile = () => {
  const activePage = 'Profile';

  const [profileForm, setProfileForm] = useState(true);
  const [vehicleCard, setVehicleCard] = useState(false);
  const [document, setDocument] = useState(false);

  return (
    <DashboardLayout activePage={activePage}>
      {' '}
      <div className='bg-brandGray-200 p-8 rounded-xl w-[840px]'>
        <div className='mb-8'>
          <Typography as='p' font='font-gordita-medium'>
            Profile
          </Typography>
        </div>
        <div className='flex mb-8 gap-[91px]  font-gordita-regular text-sm border-b border-[#D4D6D8]'>
          <span
            onClick={() => {
              setVehicleCard(false);
              setDocument(false);
              setProfileForm(true);
            }}
            className={`text-brandGray-100 px-5 cursor-pointer pb-2.5 ${
              profileForm &&
              'text-brandGreen-300 border-b-4 border-brandGreen-300 font-gordita-medium'
            }`}
          >
            Details
          </span>{' '}
          <span
            onClick={() => {
              setVehicleCard(true);
              setDocument(false);
              setProfileForm(false);
            }}
            className={`text-brandGray-100 px-5 cursor-pointer pb-2.5 ${
              vehicleCard &&
              'text-brandGreen-300 border-b-4 border-brandGreen-300 font-gordita-medium'
            }`}
          >
            Vehicle
          </span>
          <span
            onClick={() => {
              setVehicleCard(false);
              setProfileForm(false);
              setDocument(true);
            }}
            className={`text-brandGray-100 px-5 cursor-pointer pb-2.5 ${
              document &&
              'text-brandGreen-300 border-b-4 border-brandGreen-300 font-gordita-medium'
            }`}
          >
            Document
          </span>
        </div>

        {(profileForm && <ProfileForm />) ||
          (vehicleCard && <VehiclesCard />) ||
          (document && <div>document</div>)}
      </div>
    </DashboardLayout>
  );
};

export default Profile;
