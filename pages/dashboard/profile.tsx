import Typography from '@/components/Typography';
import DashboardLayout from '@/components/Layouts/DashboardLayout';

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
          <span>Pending</span>
          <span className='text-brandGray-100'>Completed</span>
        </div>
        <div className='bg-white p-4 rounded-lg inline-flex'>Profile</div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
