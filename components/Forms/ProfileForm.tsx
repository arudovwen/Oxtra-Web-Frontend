import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { SyntheticEvent } from 'react';
import { updateUserProfile } from '@/services/userservices';
import { handleCsrf } from '@/services/authservices';
import { User } from '@/hooks/useAuth';

const labelClasses = classNames(
  'block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300'
);

const inputClasses = classNames(
  `px-2  h-[40px] py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`
);

const ProfileForm = () => {
  const { user, token } = useAuth();

  const [address, setAddress] = useState(user?.address as string);

  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber as string);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const config = { headers: { Authorization: `Bearer ${token}` } };

    const editProfileValues = {
      address,
      phoneNumber,
      id: user?.id as string,
    };
    updateUserProfile(editProfileValues, config)
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className='mt-6' onSubmit={handleSubmit}>
      <div className='grid grid-cols-12 gap-y-6 gap-x-6'>
        <div className='col-span-6 md:col-span-4'>
          <label htmlFor='expiration-date' className={labelClasses}>
            First name
          </label>
          <div className='mt-1'>
            <input
              type='text'
              required
              className={inputClasses}
              value={user?.firstName}
              readOnly
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
              className={inputClasses}
              value={user?.lastName}
              readOnly
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
              value={user?.email}
              className={inputClasses}
              readOnly
            />
          </div>
        </div>

        <div className='col-span-full md:col-span-8'>
          <label htmlFor='card-number' className={labelClasses}>
            Phone number
          </label>
          <div className='mt-1'>
            <input
              type='tel'
              pattern='[0-9]{11}'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className={inputClasses}
            />
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
            type='submit'
          >
            Save changes
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
