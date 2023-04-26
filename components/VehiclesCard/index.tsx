import React from 'react';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import classNames from 'classnames';
import Link from 'next/link';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const iconClasses = classNames(`w-[18px] h-[18px] cursor-pointer`);
const labelClasses = classNames(`text-[12px] leading-[12px] text-[#848688] `);
const contentClasses = classNames(
  `text-[12px] leading-[12px] text-[#444648] font-gordita-medium`
);

const VehiclesCard = () => {
  return (
    <div className='bg-[#E4E6E8] py-[16px] px-[20px] md:inline-block rounded-lg'>
      <h5 className='text-[#444648] text-[12px] leading-[12px] font-gordita-medium text-center mb-[19px]'>
        Vehicles
      </h5>
      <div className='flex justify-between items-center  mb-[22px] text-[#444648] font-gordita-medium'>
        <span>
          <BsArrowLeftCircle className={iconClasses} />
        </span>
        <span>Car 1</span>
        <span>
          <BsArrowRightCircle className={iconClasses} />
        </span>
      </div>
      <div className='flex mb-[14px] justify-between items-center'>
        <span className={labelClasses}>Make</span>
        <span className={contentClasses}>Toyota</span>
      </div>
      <div className='flex mb-[14px] justify-between items-center'>
        <span className={labelClasses}>Model</span>
        <span className={contentClasses}>Camry</span>
      </div>
      <div className='flex mb-[14px] justify-between items-center'>
        <span className={labelClasses}>Year</span>
        <span className={contentClasses}>2012</span>
      </div>
      <div className='flex mb-[14px] justify-between items-center'>
        <span className={labelClasses}>Transmission</span>
        <span className={contentClasses}>Automatic</span>
      </div>
      <div className='flex mb-[14px] justify-between items-center'>
        <span className={labelClasses}>Make</span>
        <span className={contentClasses}>Toyota</span>
      </div>
      <div className='flex mb-[14px] justify-between items-center'>
        <span className={labelClasses}>Plate number</span>
        <span className={contentClasses}>BT 150 KTU</span>
      </div>
      <div className='flex mb-[14px] justify-between items-center'>
        <span className={labelClasses}>Status</span>
        <span className='text-[12px] leading-[12px] text-brandGreen-300  font-gordita-medium'>
          Verified
        </span>
      </div>
      <div className='flex text-xs md:text-sm items-center gap-2 bg-brandGreen-300 rounded-3xl font-gordita-regular text-white py-[10px] px-[24px]'>
        <AiOutlinePlusCircle className='w-[20px] h-[20px]' /> Add another
        vehicle
      </div>
    </div>
  );
};

export default VehiclesCard;
