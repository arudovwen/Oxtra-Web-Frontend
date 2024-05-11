import React from "react";
import { filters } from "@/components/constants/arrays";
import Select from "react-select"

const Filters = () => {
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      width: "100%",
      minHeight: "48px",
      color: "#646668",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "8px",
      border: state.hasValue ? "none" : "1px solid #D4D6D8",
      paddingRight: "16px",
      background: state.hasValue ? "#f4f6f8" : "unset",
    }),
    menu: (provided: any) => ({
      ...provided,
      fontSize: "15px",
      backgroundColor: "#fff",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isFocused ? "" : "",
      backgroundColor: state.isFocused ? "#f4f6f8" : "",
    }),
  };

  return (
    <div className="w-[18%] hidden md:block">
      <div className="font-gordita-medium text-[#242424]">Filters</div>

      <div className="mt-[16px]">
        {filters.map((item: any, i: any) => (
          <div key={i} className="mb-[24px]">
            <Select
              styles={customStyles}
              components={{
                IndicatorSeparator: () => (
                  <div style={{ display: "none" }}></div>
                ),
              }}
              options={item?.options}
              placeholder={item?.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
