import React from 'react';
import Typography from '../../constants/Typorgraphy';
import FindCarForm from '../../constants/forms/FindCarForm';

const FindPreferredCar = () => {
  return (
    <div className='flex justify-center'>
      <div className='bg-white absolute box-shadow w-[90%]  xl:w-[1164px] top-[523px] min-[1179px]:top-[464px]  xl:top-[550px]  p-6'>
        <div>
          <div className='text-brandGray-300 mb-[26px]'>
            <Typography as='h5' font='font-gordita-medium' className='text-brandGreen-300'>
              Find your preferred car now
            </Typography>
          </div>
          <FindCarForm />
        </div>
      </div>
    </div>
  );
};

export default FindPreferredCar;
