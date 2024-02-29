import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import Button from '../Button';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';
import { handleCsrf, registerUser } from '@/services/authservices';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { successAlert, dangerAlert } from '../Toasts';
import { useAuth } from '@/hooks/useAuth';
import Loading from '../Loading';

const labelClasses = classNames(
  'block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300'
);

const inputClasses = classNames(
  `px-2 py-2 h-[40px] border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular `
);

const SignUpForm = () => {
  const router = useRouter();

  const { disable, setDisable } = useAuth();

  const [enterPasswordHidden, setEnterPasswordHidden] = useState(true);
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [phoneCode, setPhoneCode] = useState('');

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setDisable(true);
    const user = {
      firstName,
      lastName,
      email,
      password,
      dob,
      address,
      state,
      phoneNumber,
      city,
      phoneCode,
    };

  
      registerUser(user)
        .then((res) => {
          successAlert(res.data.message);
          router.push('/login');
          setDisable(false);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.message.includes('email')) {
            const error = err.response.data.message;
            dangerAlert(error);
            setDisable(false);
            setErrorMessageEmail(error);
          } else if (err.response.data.message.includes('password')) {
            const error = err.response.data.message;
            dangerAlert(error);
            setDisable(false);
            setErrorMessagePassword(error);
          }
        });
  
  };

  return (
    <main className='w-[90%] lg:mx-auto lg:max-w-[500px]'>
      <div className='mb-4 mt-[40px] text-brandGray-300'>
        <Typography as='h4' font='font-gordita-medium'>
          Sign up
        </Typography>
      </div>
      <div className='text-brandGray-100 mb-8'>
        <Typography as='p' font='font-gordita-regular'>
          Please enter your details to proceed
        </Typography>
      </div>

      <section className='flex-auto'>
        <div className=''>
          <form className='mt-6' onSubmit={handleSubmit}>
            <div className='grid grid-cols-12 gap-y-6 gap-x-4'>
              <div className='col-span-full'>
                <label htmlFor='email-address' className={labelClasses}>
                  First name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    placeholder='Enter your first name'
                    onChange={(e) => setFirstName(e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>
              </div>
              <div className='col-span-full'>
                <label htmlFor='email-address' className={labelClasses}>
                  Last name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    placeholder='Enter your last name'
                    onChange={(e) => setLastName(e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>
              </div>

              <div className='col-span-full'>
                <label htmlFor='' className={labelClasses}>
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    type='email'
                    autoComplete='email'
                    placeholder='Enter your email address'
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>
                <p className='text-red-700 text-sm mt-1'>{errorMessageEmail}</p>
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
              </div>
              <div className='col-span-5 md:col-span-3'>
                <label htmlFor='expiration-date' className={labelClasses}>
                  Phone code
                </label>
                <div className='mt-1'>
                  <input
                    type='tel'
                    id='phone-code'
                    name='phone-code'
                    pattern='[0-9]{3}'
                    required
                    placeholder='234'
                    onChange={(e) => setPhoneCode(e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className='col-span-7 md:col-span-5'>
                <label htmlFor='expiration-date' className={labelClasses}>
                  Phone number
                </label>
                <div className='mt-1'>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    pattern='[0-9]{11}'
                    required
                    placeholder='08083594505'
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className='col-span-6 md:col-span-4'>
                <label htmlFor='pick up Date' className={labelClasses}>
                  Date of birth
                </label>
                <div className='mt-1'>
                  <input
                    type='date'
                    required
                    onChange={(e) => setDob(e.target.value)}
                    id='pick up Date'
                    className={`${inputClasses}, uppercase`}
                    name='pick up Date'
                  />
                </div>
              </div>

              <div className='col-span-6 md:col-span-full'>
                <label htmlFor='card-number' className={labelClasses}>
                  Home address
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    className={inputClasses}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Enter your residential address'
                  />
                </div>
              </div>

              <div className='col-span-6'>
                <label htmlFor='expiration-date' className={labelClasses}>
                  State
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    onChange={(e) => setState(e.target.value)}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className='col-span-6'>
                <label htmlFor='city' className={labelClasses}>
                  City
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    required
                    onChange={(e) => setCity(e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>
            </div>

            <div className='mt-6 flex space-x-2 mb-[35.5px]'>
              <div className='flex h-5 gap-2 items-center'>
                <input
                  id='same-as-shipping'
                  name='same-as-shipping'
                  type='checkbox'
                  required
                  className=''
                />
                <p className='text-[12px] text-brandGray-300 leading-[12px] font-gordita-regular'>
                  Accept our{' '}
                  <span className='font-gordita-medium'>
                    Terms and Conditions
                  </span>{' '}
                </p>
              </div>
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
                'Create Account'
              ) : (
                <Loading type='spin' width={14} height={14} color='#42864F' />
              )}
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUpForm;
