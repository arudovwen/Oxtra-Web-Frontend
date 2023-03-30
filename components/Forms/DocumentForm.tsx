import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import Button from '../Button';

const labelClasses = classNames(
  'block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300'
);

const inputClasses = classNames(
  `px-2 py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`
);

const DocumentForm = () => {
  return (
    <main className='mx-auto  max-w-[500px] lg:min-h-full  lg:overflow-hidden'>
      <div className='mb-4 text-brandGray-300'>
        <Typography as='h4' font='font-gordita-medium'>
          Documents
        </Typography>
      </div>
      <div className='text-brandGray-100 mb-8'>
        <Typography as='p' font='font-gordita-regular'>
          Please enter the required details to get started
        </Typography>
      </div>

      <form className='mt-6'>
        <div className='grid grid-cols-12 gap-y-6 gap-x-4'>
          <div className='col-span-full'>
            <label htmlFor='email-address' className={labelClasses}>
              License number
            </label>
            <div className='mt-1'>
              <input
                type='text'
                placeholder='Enter your first name and last name '
                className={inputClasses}
              />
            </div>
          </div>
        </div>
        <div>DRAG AND DROP COMPONENENT</div>
        <Button
          bg='bg-brandGreen-300'
          hover='hover:bg-brandGray-200'
          textColor='text-white'
          width={true}
          size='text-sm'
        >
          Next
        </Button>
      </form>
    </main>
  );
};

export default DocumentForm;
