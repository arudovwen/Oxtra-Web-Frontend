import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import { useState } from 'react';

const labelClasses = classNames(
  'block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300 '
);

const inputClasses = classNames(
  `px-2 py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular bg-brandGray-200 text-brandGray-100 text-base`
);

const PasswordForm = () => {
  const [enterPasswordHidden, setEnterPasswordHidden] = useState(true);

  const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassword_confirmation, setNewPassword_confirmation] = useState('');

  return (
    <form className='grid grid-cols-12 gap-y-6 gap-x-4  md:w-1/2 '>
      <div className='col-span-full'>
        <label htmlFor='email-address' className={labelClasses}>
          Enter old password
        </label>
        <div className='mt-1 relative'>
          <input
            type={`${enterPasswordHidden ? 'password' : 'text'}`}
            placeholder='Enter password'
            className={inputClasses}
          />

          {enterPasswordHidden ? (
            <AiOutlineEyeInvisible
              className='absolute top-[24px] right-[12px]'
              onClick={() => setEnterPasswordHidden(!enterPasswordHidden)}
            />
          ) : (
            <AiOutlineEye
              className='absolute top-[24px] right-[12px]'
              onClick={() => setEnterPasswordHidden(!enterPasswordHidden)}
            />
          )}
        </div>
      </div>
      <div className='col-span-full'>
        <label htmlFor='email-address' className={labelClasses}>
          Enter new password
        </label>
        <div className='mt-1 relative'>
          <input
            type={`${enterPasswordHidden ? 'password' : 'text'}`}
            placeholder='Enter password'
            className={inputClasses}
          />

          {enterPasswordHidden ? (
            <AiOutlineEyeInvisible
              className='absolute top-[24px] right-[12px]'
              onClick={() => setEnterPasswordHidden(!enterPasswordHidden)}
            />
          ) : (
            <AiOutlineEye
              className='absolute top-[24px] right-[12px]'
              onClick={() => setEnterPasswordHidden(!enterPasswordHidden)}
            />
          )}
        </div>
      </div>

      <div className='col-span-full'>
        <label htmlFor='' className={labelClasses}>
          Confirm new password
        </label>
        <div className='mt-1 relative'>
          <input
            type={`${confirmPasswordHidden ? 'password' : 'text'}`}
            id='email-address'
            name='email-address'
            autoComplete='email'
            placeholder='Enter password'
            className={inputClasses}
          />
          {confirmPasswordHidden ? (
            <AiOutlineEyeInvisible
              className='absolute top-[24px] right-[12px]'
              onClick={() => setConfirmPasswordHidden(!confirmPasswordHidden)}
            />
          ) : (
            <AiOutlineEye
              className='absolute top-[24px] right-[12px]'
              onClick={() => setConfirmPasswordHidden(!confirmPasswordHidden)}
            />
          )}
        </div>
      </div>
      <div className='col-span-full'>
        <Button
          bg='bg-brandGreen-300'
          hover='hover:bg-brandGray-200'
          textColor='text-white'
          width={true}
          size='text-sm'
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default PasswordForm;
