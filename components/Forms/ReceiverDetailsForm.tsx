import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import Button from '../Button';
import { useRouter } from 'next/router';

const labelClasses = classNames(
  'block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300'
);

const inputClasses = classNames(
  `px-2  h-[40px] py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`
);

const ReceiverDetailsForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/send-a-package/package');
  };

  return (
    <main className='w-[90%] md:w-[39%] '>
      <div className='mb-4 text-brandGray-300'>
        <Typography as='h4' font='font-gordita-medium'>
          Receiver details
        </Typography>
      </div>
      <div className='text-brandGray-100 mb-8'>
        <Typography as='p' font='font-gordita-regular'>
          Please enter the required details to get started
        </Typography>
      </div>

      <section className='flex-auto'>
        <form className='mt-6' onSubmit={handleSubmit}>
          <div className='grid grid-cols-12 gap-y-6 gap-x-4 mb-8'>
            <div className='col-span-full md:col-span-6'>
              <label htmlFor='expiration-date' className={labelClasses}>
                Receiver name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  required
                  placeholder=' Sender name'
                  className={inputClasses}
                />
              </div>
            </div>

            <div className='col-span-full md:col-span-6'>
              <label htmlFor='card-number' className={labelClasses}>
                Phone number
              </label>
              <div className='mt-1'>
                <input type='number' required className={inputClasses} />
              </div>
            </div>

            <div className='col-span-full'>
              <label htmlFor='' className={labelClasses}>
                Email
              </label>
              <div className='mt-1'>
                <input
                  type='email'
                  id='email-address'
                  required
                  name='email-address'
                  autoComplete='email'
                  placeholder='Enter your email address'
                  className={inputClasses}
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label className={labelClasses}>Delivery address</label>
              <div className='mt-1'>
                <input
                  type='text'
                  required
                  className={inputClasses}
                  placeholder='Enter address'
                />
              </div>
            </div>

            <div className='col-span-6 md:col-span-6'>
              <label htmlFor='expiration-date' className={labelClasses}>
                State
              </label>
              <div className='mt-1'>
                <input type='text' required className={inputClasses} />
              </div>
            </div>

            <div className='col-span-6 md:col-span-6'>
              <label htmlFor='city' className={labelClasses}>
                City
              </label>
              <div className='mt-1'>
                <input type='text' required className={inputClasses} />
              </div>
            </div>

            <div className='col-span-6 md:col-span-6'>
              <label htmlFor='expiration-date' className={labelClasses}>
                Delivery landmark
              </label>
              <div className='mt-1'>
                <input type='text' required className={inputClasses} />
              </div>
            </div>

            <div className='col-span-6 md:col-span-6'>
              <label htmlFor='city' className={labelClasses}>
                Delivery date
              </label>
              <div className='mt-1'>
                <input
                  type='date'
                  className={`${inputClasses}  uppercase`}
                  required
                />
              </div>
            </div>
          </div>

          <Button
            bg='bg-brandGreen-300'
            hover='hover:bg-brandGray-200'
            textColor='text-white'
            width={true}
            type='submit'
            size='text-base'
          >
            Next
          </Button>
        </form>
      </section>
    </main>
  );
};

export default ReceiverDetailsForm;
