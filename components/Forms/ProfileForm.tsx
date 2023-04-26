import React from 'react';
import classNames from 'classnames';
import Button from '../Button';

const labelClasses = classNames(
  'block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300'
);

const inputClasses = classNames(
  `px-2 py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`
);

const ProfileForm = () => {
  return (
    <form className='mt-6'>
      <div className='grid grid-cols-12 gap-y-6 gap-x-6'>
        <div className='col-span-6 md:col-span-4'>
          <label htmlFor='expiration-date' className={labelClasses}>
            First name
          </label>
          <div className='mt-1'>
            <input
              type='text'
              required
              placeholder='First name'
              className={inputClasses}
            />
          </div>
        </div>

        <div className='col-span-6 md:col-span-4'>
          <label htmlFor='cvc' className={labelClasses}>
            Last name
          </label>
          <div className='mt-1'>
            <input
              type='text'
              required
              placeholder='Last name'
              className={inputClasses}
            />
          </div>
        </div>
        <div className='col-span-full md:col-span-8'>
          <label htmlFor='' className={labelClasses}>
            Email
          </label>
          <div className='mt-1'>
            <input
              type='email'
              id='email-address'
              name='email-address'
              autoComplete='email'
              placeholder='Enter your email address'
              className={inputClasses}
            />
          </div>
        </div>

        <div className='col-span-full md:col-span-8'>
          <label htmlFor='card-number' className={labelClasses}>
            Phone number
          </label>
          <div className='mt-1'>
            <input type='number' required className={inputClasses} />
          </div>
        </div>

        <div className='col-span-full md:col-span-8'>
          <label htmlFor='card-number' className={labelClasses}>
            Address
          </label>
          <div className='mt-1'>
            <input
              type='text'
              className={inputClasses}
              placeholder='Enter your residential address'
            />
          </div>
        </div>
        <div className='col-span-full md:col-span-8'>
          {' '}
          <Button
            bg='bg-brandGreen-300'
            hover='hover:bg-brandGray-200'
            textColor='text-white'
            width={true}
            size='text-sm'
          >
            Save changes
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
