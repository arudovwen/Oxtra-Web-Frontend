import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { SyntheticEvent } from 'react';
import { handleCsrf, resetPassword } from '@/services/authservices';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { dangerAlert } from '../Toasts';

const labelClasses = classNames(
  'block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300 '
);

const inputClasses = classNames(
  `px-2 py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular bg-brandGray-200 text-brandGray-100 text-base`
);

const ResetPasswordForm = () => {
  const [enterPasswordHidden, setEnterPasswordHidden] = useState(true);
  const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true);

  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const resetThePassword = {
      password,
      password_confirmation,
    };

    console.log(password);

    handleCsrf().then((res) => {
      resetPassword(resetThePassword)
        .then((res) => {
          console.log('res', res);

          //  login(res.data.user);
          //  successAlert(res.data.message);
          //  setDisable(false);
        })
        .catch((err) => {
          console.log(err);
          dangerAlert(err?.data?.message);
          //  setDisable(false);
        });
    });
  };

  return (
    <form
      className='grid grid-cols-12 gap-y-6 gap-x-4  md:w-1/2 '
      onSubmit={handleSubmit}
    >
      <div className='col-span-full'>
        <label htmlFor='email-address' className={labelClasses}>
          Enter new password
        </label>
        <div className='mt-1 relative'>
          <input
            type={`${enterPasswordHidden ? 'password' : 'text'}`}
            placeholder='Enter new password'
            className={inputClasses}
            onChange={(e) => setPassword(e.target.value)}
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
            placeholder='Confirm new password'
            className={inputClasses}
            onChange={(e) => setPassword_confirmation(e.target.value)}
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
          type='submit'
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
