import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { SyntheticEvent } from 'react';
import { handleCsrf, resetPassword } from '@/services/authservices';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { dangerAlert } from '../Toasts';
import Typography from '../Typography';
import Loading from '../Loading';
import Link from 'next/link';

const labelClasses = classNames(
  'block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300 '
);

const inputClasses = classNames(
  `px-2 py-2 h-[40px] border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular bg-brandGray-200 text-brandGray-100 text-base`
);

const ResetPasswordForm = () => {
  const [enterPasswordHidden, setEnterPasswordHidden] = useState(true);
  const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true);
  const { disable, setDisable } = useAuth();
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setDisable(true);
    const resetThePassword = {
      password,
      password_confirmation,
    };


      resetPassword(resetThePassword)
        .then((res) => {

          //  login(res.data.user);
          //  successAlert(res.data.message);
          setDisable(false);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessagePassword(err?.data?.message);
          dangerAlert(err?.data?.message);
          setDisable(false);
        });
   
  };

  return (
    <main className='w-[90%] lg:mx-auto lg:max-w-[500px]'>
      <div className='mb-4 mt-[40px] text-brandGray-300'>
        <Typography as='h4' font='font-gordita-medium'>
          Reset Password?
        </Typography>
      </div>
      <div className='text-brandGray-100 mb-8'>
        <p className='font-gordita-regular text-[16px]'>
          You requested for a password reset. Please enter a new password and
          confirm.
        </p>
      </div>

      <section className='flex-auto'>
        <div className=''>
          <form className='mt-6' onSubmit={handleSubmit}>
            <div className='grid grid-cols-12 gap-y-6 gap-x-4 mb-7'>
              <div className='col-span-full'>
                <label htmlFor='email-address' className={labelClasses}>
                  Enter new password
                </label>
                <div className='mt-1 relative'>
                  <input
                    type={`${enterPasswordHidden ? 'password' : 'text'}`}
                    placeholder='Enter password'
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputClasses}
                    required
                  />

                  {enterPasswordHidden ? (
                    <AiOutlineEye
                      className='absolute top-[24px] right-[12px]'
                      onClick={() =>
                        setEnterPasswordHidden(!enterPasswordHidden)
                      }
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className='absolute top-[24px] right-[12px]'
                      onClick={() =>
                        setEnterPasswordHidden(!enterPasswordHidden)
                      }
                    />
                  )}
                </div>

                {errorMessagePassword && (
                  <p className='text-red-700 text-sm mt-1'>
                    {errorMessagePassword}
                  </p>
                )}
              </div>{' '}
              <div className='col-span-full '>
                <label htmlFor='email-address' className={labelClasses}>
                  Confirm new password
                </label>
                <div className='mt-1 relative'>
                  <input
                    type={`${confirmPasswordHidden ? 'password' : 'text'}`}
                    placeholder='Enter password'
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                    className={inputClasses}
                    required
                  />

                  {confirmPasswordHidden ? (
                    <AiOutlineEye
                      className='absolute top-[24px] right-[12px]'
                      onClick={() =>
                        setConfirmPasswordHidden(!confirmPasswordHidden)
                      }
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className='absolute top-[24px] right-[12px]'
                      onClick={() =>
                        setConfirmPasswordHidden(!confirmPasswordHidden)
                      }
                    />
                  )}
                </div>

                {errorMessagePassword && (
                  <p className='text-red-700 text-sm mt-1'>
                    {errorMessagePassword}
                  </p>
                )}
              </div>{' '}
            </div>

            <Button
              bg={!disable ? 'bg-brandGreen-300' : 'bg-brandGreen-100'}
              hover='hover:bg-brandGray-200'
              textColor='text-white'
              width={true}
              size='text-sm'
              type='submit'
            >
              {!disable ? (
                'Reset Password'
              ) : (
                <Loading type='spin' width={14} height={14} color='#42864F' />
              )}
            </Button>
            <div className='text-center mt-[32px]'>
              <span className='text-[12px] text-brandGray-300 leading-[12px] font-gordita-medium'>
                I did not make the reset request{' '}
                <Link href='/' className='text-brandGreen-300 '>
                  Report here
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ResetPasswordForm;
