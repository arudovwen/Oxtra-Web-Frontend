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

  const [exteriorFront, setExteriorFront] = useState<{ name: string } | null>();
  const [exteriorBack, setExteriorBack] = useState<{ name: string } | null>();
  const [exteriorLeftSide, setExteriorLeftSide] = useState<{
    name: string;
  } | null>();

  const [exteriorRightSide, setExteriorRightSide] = useState<{
    name: string;
  } | null>();

  const [interiorBack, setInteriorBack] = useState<{
    name: string;
  } | null>();

  const [interiorFront, setInteriorFront] = useState<{
    name: string;
  } | null>();

  const [doorHandleFrontRight, setDoorHandleFrontRight] = useState<{
    name: string;
  } | null>();

  const [doorHandleFrontLeft, setDoorHandleFrontLeft] = useState<{
    name: string;
  } | null>();

  const [doorHandleBackRight, setDoorHandleBackRight] = useState<{
    name: string;
  } | null>();

  const [doorHandleBackLeft, setDoorHandleBackLeft] = useState<{
    name: string;
  } | null>();

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
                    placeholder='Toyota'
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
                    placeholder='Camry'
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
                  <select className={inputClasses}>
                    <option label='Automatic'>Automatic</option>
                    <option label='Manual'>Manual</option>
                  </select>
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
                  <input type='number' required className={inputClasses} />
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
                    <input
                      name={feat.name}
                      type='checkbox'
                      className=''
                      onChange={(e) => console.log(e.target)}
                    />
                    <span className='text-[12px]  leading-[20px] text-brandGray-300 font-gordita-regular'>
                      {feat.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-[32px]'>
              {/* first row */}
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
                  {exteriorFront?.name || 'Exterior front (with headlights on)'}
                </span>
                <input
                  multiple={false}
                  type='file'
                  required
                  onChange={(e) => {
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
                  type='file'
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setExteriorBack(e.target.files[0]);
                  }}
                />
              </div>

              {/* second row */}

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
                  {exteriorLeftSide?.name ||
                    'Exterior left side (with parking lights on)'}
                </span>
                <input
                  multiple={false}
                  type='file'
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setExteriorLeftSide(e.target.files[0]);
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
                  {exteriorRightSide?.name ||
                    'Exterior right side (with parking lights on)'}
                </span>
                <input
                  type='file'
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setExteriorRightSide(e.target.files[0]);
                  }}
                />
              </div>

              {/* third row */}
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
                  {interiorBack?.name || 'Interior back'}
                </span>
                <input
                  multiple={false}
                  type='file'
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setInteriorBack(e.target.files[0]);
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
                  {interiorFront?.name || 'Interior front'}
                </span>
                <input
                  type='file'
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setInteriorFront(e.target.files[0]);
                  }}
                />
              </div>

              {/* forth row */}
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
                  {doorHandleFrontRight?.name || 'Door handle front right'}
                </span>
                <input
                  multiple={false}
                  type='file'
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setDoorHandleFrontRight(e.target.files[0]);
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
                  {doorHandleFrontLeft?.name || 'Door handle front left'}
                </span>
                <input
                  type='file'
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setDoorHandleFrontLeft(e.target.files[0]);
                  }}
                />
              </div>

              {/* fifth row */}
              <div
                ref={wrapperRef}
                className='drop-file-input mb-8 bg-[#f9fafb]
                '
              >
                <span className=''>
                  <AiOutlineCloudUpload className='w-7 h-7' />
                </span>

                <div className={dragAndDropClasses}>
                  Drag and drop or Choose file to upload
                </div>
                <span className={typeDocClasses}>
                  {doorHandleBackRight?.name || 'Door handle back right'}
                </span>
                <input
                  multiple={false}
                  type='file'
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setDoorHandleBackRight(e.target.files[0]);
                  }}
                />
              </div>

              <div
                ref={wrapperRef}
                className='drop-file-input mb-8 bg-[#f9fafb]
                '
              >
                <span className=''>
                  <AiOutlineCloudUpload className='w-7 h-7' />
                </span>

                <div className={dragAndDropClasses}>
                  Drag and drop or Choose file to upload
                </div>
                <span className={typeDocClasses}>
                  {doorHandleBackLeft?.name || 'Door handle back left'}
                </span>
                <input
                  type='file'
                  required
                  onChange={(e) => {
                    if (!e.target.files) {
                      return;
                    }
                    setDoorHandleBackLeft(e.target.files[0]);
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
