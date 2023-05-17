import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import classNames from 'classnames';
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { loginUser, handleCsrf } from '@/services/authservices';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import Loading from '../Loading';
import { successAlert } from '../Toasts';
import { SyntheticEvent } from 'react';

const labelClasses = classNames(
  'block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300'
);

const inputClasses = classNames(
  `px-2 py-2 border  border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`
);

const LoginForm = () => {
  const [enterPasswordHidden, setEnterPasswordHidden] = useState(true);
  const { login, disable, setDisable, setToken } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setDisable(true);

    const user = {
      email,
      password,
    };

    handleCsrf().then((res) => {
      loginUser(user)
        .then((res) => {
          console.log('res', res);
          setToken(res.data.token);
          login(res.data.user);
          successAlert(res.data.message);
          setDisable(false);
        })
        .catch((err) => {
          console.log(err);

          setDisable(false);
        });
    });
  };

  return (
    <main className='w-[90%] lg:mx-auto lg:max-w-[500px]'>
      <div className='mb-4 mt-[40px] text-brandGray-300'>
        <Typography as='h4' font='font-gordita-medium'>
          Login
        </Typography>
      </div>
      <div className='text-brandGray-100 mb-8'>
        <Typography as='p' font='font-gordita-regular'>
          Please enter your details to proceed
        </Typography>
      </div>

      <section className='flex w-full flex-col'>
        <form className='mt-6' onSubmit={handleSubmit}>
          <div className='grid grid-cols-12 gap-y-6'>
            <div className='col-span-full'>
              <label htmlFor='' className={labelClasses}>
                Email address
              </label>
              <div className='mt-1'>
                <input
                  type='email'
                  id='email-address'
                  name='email-address'
                  autoComplete='email'
                  placeholder='Enter your email address'
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClasses}
                  required
                />
              </div>
            </div>
            <div className='col-span-full'>
              <label htmlFor='email-address' className={labelClasses}>
                Enter password
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
                    onClick={() => setEnterPasswordHidden(!enterPasswordHidden)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className='absolute top-[24px] right-[12px]'
                    onClick={() => setEnterPasswordHidden(!enterPasswordHidden)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className='text-end mt-[22px] mb-[32px]'>
            <Link
              href='/forgot-password'
              className='text-[12px] leading-[12px] text-brandGreen-300 font-gordita-medium'
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            bg={!disable ? 'bg-brandGreen-300' : 'bg-brandGreen-100'}
            hover='hover:bg-brandGray-200'
            textColor='text-white'
            width={true}
            size='text-sm'
            type='submit'
            disable={disable}
          >
            {!disable ? (
              'Login'
            ) : (
              <Loading type='spin' width={14} height={14} color='#42864F' />
            )}
          </Button>
          <div className='text-end mt-[32px]'>
            <span className='text-[12px] text-brandGray-300 leading-[12px] font-gordita-medium'>
              Don’t have an account?{' '}
              <Link href='/signup' className='text-brandGreen-300 '>
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
