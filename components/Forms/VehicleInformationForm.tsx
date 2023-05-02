import React, { useState, useRef } from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import Button from '../Button';
import { useRouter } from 'next/router';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const labelClasses = classNames(
  'block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300'
);

const inputClasses = classNames(
  `px-2  h-[40px] py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`
);

const dragAndDropClasses = classNames(
  `font-gordita-medium my-2 text-[10px] text-[#41454C] `
);

const typeDocClasses = classNames(
  `text-[#797980] font-gordita-regular text-[12px] leading-[17px] `
);

const vehicleFeatures = [
  {
    name: 'Air Conditioning',
  },
  {
    name: 'Air Bags',
  },
  {
    name: 'Air Suspension',
  },
];

const VehicleInformationForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/put-up-your-vehicle/documents');
  };

  const [dragEnter, setDragEnter] = useState(false);

  const [exteriorFront, setExteriorFront] = useState<{ name: string } | null>();
  const [exteriorBack, setExteriorBack] = useState<{ name: string } | null>();

  const wrapperRef = useRef(null);

  return (
    <main className='w-[90%] lg:mx-auto lg:max-w-[500px]'>
      <div className='mb-4  text-brandGray-300'>
        <Typography as='h4' font='font-gordita-medium'>
          Vehicle information
        </Typography>
      </div>
      <div className='text-brandGray-100 mb-8'>
        <Typography as='p' font='font-gordita-regular'>
          Please enter the required details to get started
        </Typography>
      </div>

      <section className='flex-auto'>
        <div className=''>
          <form className='mt-6' onSubmit={handleSubmit}>
            <div className='grid grid-cols-12 gap-y-6 gap-x-4'>
              <div className='col-span-full md:col-span-6'>
                <label htmlFor='expiration-date' className={labelClasses}>
                  Brand
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    placeholder='First name'
                    className={inputClasses}
                    required
                  />
                </div>
              </div>

              <div className='col-span-full  md:col-span-6'>
                <label htmlFor='cvc' className={labelClasses}>
                  Model
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    placeholder='Last name'
                    className={inputClasses}
                    required
                  />
                </div>
              </div>

              <div className='col-span-6'>
                <label htmlFor='cvc' className={labelClasses}>
                  Year
                </label>
                <div className='mt-1'>
                  <input type='number' required className={inputClasses} />
                </div>
              </div>
              <div className='col-span-6'>
                <label htmlFor='cvc' className={labelClasses}>
                  Transmision
                </label>
                <div className='mt-1'>
                  <input type='text' required className={inputClasses} />
                </div>
              </div>

              <div className='col-span-6'>
                <label htmlFor='cvc' className={labelClasses}>
                  Color
                </label>
                <div className='mt-1'>
                  <input type='text' required className={inputClasses} />
                </div>
              </div>

              <div className='col-span-6'>
                <label htmlFor='cvc' className={labelClasses}>
                  Plate number
                </label>
                <div className='mt-1'>
                  <input type='text' required className={inputClasses} />
                </div>
              </div>
            </div>

            <div className='flex h-5 gap-[21px] my-8 items-center'>
              {vehicleFeatures.map((feat) => {
                return (
                  <div
                    key={feat.name}
                    className='flex h-5 gap-[8px] items-center'
                  >
                    <input name={feat.name} type='checkbox' className='' />
                    <span className='text-[12px]  leading-[20px] text-brandGray-300 font-gordita-regular'>
                      {feat.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className='grid grid-cols-2 gap-[32px]'>
              <div
                ref={wrapperRef}
                className='drop-file-input bg-[#f9fafb]
                '
              >
                <span className=''>
                  <AiOutlineCloudUpload className='w-7 h-7' />
                </span>

                <div className={dragAndDropClasses}>
                  Drag and drop or Choose file to upload
                </div>
                <span className={typeDocClasses}>
                  {exteriorFront?.name || 'Exterior front(with headlights on)'}
                </span>
                <input
                  multiple={false}
                  type='file'
                  value=''
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!e.target.files) {
                      return;
                    }
                    setExteriorFront(e.target.files[0]);
                  }}
                />
              </div>

              <div
                ref={wrapperRef}
                className='drop-file-input bg-[#f9fafb]
                '
              >
                <span className=''>
                  <AiOutlineCloudUpload className='w-7 h-7' />
                </span>

                <div className={dragAndDropClasses}>
                  Drag and drop or Choose file to upload
                </div>
                <span className={typeDocClasses}>
                  {exteriorBack?.name ||
                    'Exterior back (with reverse light on)'}
                </span>
                <input
                  multiple={false}
                  type='file'
                  value=''
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!e.target.files) {
                      return;
                    }
                    setExteriorBack(e.target.files[0]);
                  }}
                />
              </div>
            </div>

            <Button
              bg='bg-brandGreen-300'
              hover='hover:bg-brandGray-200'
              textColor='text-white'
              width={true}
              size='text-sm'
              type='submit'
            >
              Next
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default VehicleInformationForm;
