import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import Button from '../Button';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';

const labelClasses = classNames(
  'block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300'
);

const inputClasses = classNames(
  `px-2 py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`
);

const SignUpForm = () => {
  const [enterPasswordHidden, setEnterPasswordHidden] = useState(true);

  return (
    <main className='mx-auto max-w-[500px]'>
      <div className='mb-4 mt-[40px] text-brandGray-300'>
        <Typography as='h4' font='font-gordita-medium'>
          Sign up to complete order
        </Typography>
      </div>
      <div className='text-brandGray-100 mb-8'>
        <Typography as='p' font='font-gordita-regular'>
          Please enter your details to proceed
        </Typography>
      </div>

      <section className='flex-auto'>
        <div className=''>
          <form className='mt-6'>
            <div className='grid grid-cols-12 gap-y-6 gap-x-4'>
              <div className='col-span-full'>
                <label htmlFor='email-address' className={labelClasses}>
                  Full name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    placeholder='Enter your first name and last name '
                    className={inputClasses}
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
                    id='email-address'
                    name='email-address'
                    autoComplete='email'
                    placeholder='Enter your email address'
                    className={inputClasses}
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
                    className={inputClasses}
                  />

                  {enterPasswordHidden ? (
                    <AiOutlineEyeInvisible
                      className='absolute top-[24px] right-[12px]'
                      onClick={() =>
                        setEnterPasswordHidden(!enterPasswordHidden)
                      }
                    />
                  ) : (
                    <AiOutlineEye
                      className='absolute top-[24px] right-[12px]'
                      onClick={() =>
                        setEnterPasswordHidden(!enterPasswordHidden)
                      }
                    />
                  )}
                </div>
              </div>

              <div className='col-span-8 md:col-span-7'>
                <label htmlFor='expiration-date' className={labelClasses}>
                  Phone number
                </label>
                <div className='mt-1'>
                  <input type='number' className={inputClasses} />
                </div>
              </div>

              <div className='col-span-4 md:col-span-5'>
                <label htmlFor='cvc' className={labelClasses}>
                  Date of birth
                </label>
                <div className='mt-1'>
                  <input type='date' className={`${inputClasses}, uppercase`} />
                </div>
              </div>

              <div className='col-span-full'>
                <label htmlFor='card-number' className={labelClasses}>
                  Home address
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    className={inputClasses}
                    placeholder='Enter your residential address'
                  />
                </div>
              </div>

              <div className='col-span-6'>
                <label htmlFor='expiration-date' className={labelClasses}>
                  State
                </label>
                <div className='mt-1'>
                  <input type='number' className={inputClasses} />
                </div>
              </div>

              <div className='col-span-6'>
                <label htmlFor='city' className={labelClasses}>
                  City
                </label>
                <div className='mt-1'>
                  <input type='text' className={inputClasses} />
                </div>
              </div>
            </div>

            <div className='mt-6 flex space-x-2 mb-[35.5px]'>
              <div className='flex h-5 gap-2 items-center'>
                <input
                  id='same-as-shipping'
                  name='same-as-shipping'
                  type='checkbox'
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
              bg='bg-brandGreen-300'
              hover='hover:bg-brandGray-200'
              textColor='text-white'
              width={true}
              size='text-sm'
            >
              Create Account
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUpForm;
