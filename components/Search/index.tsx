import React from "react";
import classNames from "classnames";
import { BiSearch } from "react-icons/bi";

const inputClasses = classNames(
  "px-2 py-2 w-[128px] border border-[#d4d6d8] rounded-lg font-gordita-regular",
);

const Search = () => {
  return (
    <form className="flex justify-between mb-8">
      <input type="text" className={inputClasses} placeholder="Location" />
      <input type="text" className={inputClasses} placeholder="Price" />
      <div className=" relative">
        <input
          type="text"
          placeholder="Search car by name"
          className="px-2 py-2 w-[17rem] font-gordita-regular bg-[#F4F6F8]   border border-[#d4d6d8] rounded-lg"
        />
        <BiSearch className="absolute top-[12px] right-[7px] w-[20px] h-[20px]" />
      </div>

      <input type="text" className={inputClasses} placeholder="Car Brand" />
      <input type="text" className={inputClasses} placeholder="Model" />
      <input type="text" className={inputClasses} placeholder="Year" />
    </form>
  );
};

export default Search;
