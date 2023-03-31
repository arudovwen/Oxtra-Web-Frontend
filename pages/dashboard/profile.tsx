import Typography from '@/components/Typography';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import ProfileForm from '@/components/Forms/ProfileForm';

const Profile = () => {
  const activePage = 'Profile';
  return (
    <DashboardLayout activePage={activePage}>
      {' '}
      <div className='bg-brandGray-200 p-8 rounded-xl w-[840px]'>
        <div className='mb-8'>
          <Typography as='p' font='font-gordita-medium'>
            Profile
          </Typography>
        </div>
        <div className='flex mb-8 gap-[91px] pl-[59px] pb-[10px] font-gordita-regular text-sm border-b border-[#D4D6D8]'>
          <span>Details</span>
          <span className='text-brandGray-100'>Vehicles</span>
          <span className='text-brandGray-100'>Documents</span>
        </div>

        <ProfileForm />
      </div>
    </DashboardLayout>
  );
};

export default Profile;
