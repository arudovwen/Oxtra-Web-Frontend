import Typography from '@/components/Typography';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import ProfileForm from '@/components/Forms/ProfileForm';
import Link from 'next/link';
import VehiclesCard from '@/components/VehiclesCard';

const Vehicles = () => {
  const activePage = 'Profile';
  const subPage = 'vehicles';

  const nav = [
    { name: 'Details', link: '/dashboard/profile' },
    { name: 'Vehicles', link: '/dashboard/profile/vehicles' },
    { name: 'Documents', link: '/dashboard/profile/documents' },
  ];

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
          {nav.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.link}
                className={` px-5 pb-2.5 ${
                  item.name.toLowerCase() === subPage.toLowerCase()
                    ? 'text-brandGreen-300 border-b-4 border-brandGreen-300 font-gordita-medium'
                    : 'text-brandGray-100'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <VehiclesCard />
      </div>
    </DashboardLayout>
  );
};

export default Vehicles;
