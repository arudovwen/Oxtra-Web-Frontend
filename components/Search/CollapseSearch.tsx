import React from 'react';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import classNames from 'classnames';

const inputClasses = classNames(
  'px-2 py-2 w-full border border-[#d4d6d8] rounded-lg font-gordita-regular'
);

const CollapseSearch = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className='border-brandGreen-300 rounded-sm font-regular border px-3 inline-block mb-5'
        onClick={() => setOpen(!open)}
      >
        Filters
      </div>

      {open && (
        <form className='flex flex-col gap-6 justify-between mb-8'>
          <input type='text' className={inputClasses} placeholder='Location' />
          <input type='text' className={inputClasses} placeholder='Price' />
          <div className=' relative'>
            <input
              type='text'
              placeholder='Search car by name'
              className='px-2 py-2 w-full font-gordita-regular bg-[#F4F6F8]   border border-[#d4d6d8] rounded-lg'
            />
            <BiSearch className='absolute top-[12px] right-[7px] w-[20px] h-[20px]' />
          </div>

          <input type='text' className={inputClasses} placeholder='Car Brand' />
          <input type='text' className={inputClasses} placeholder='Model' />
          <input type='text' className={inputClasses} placeholder='Year' />
        </form>
      )}
    </div>
  );
};

export default CollapseSearch;
