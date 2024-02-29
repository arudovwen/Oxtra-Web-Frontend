import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import {
  carAccessories,
  cars,
  filters,
  sortings,
} from "@/components/constants/arrays";
import Select from "react-select";
import { useRouter } from "next/router";

const RentVehicle = () => {
  const [sortBy, setSortBy] = useState(sortings[0]);
  const [showSort, setShowSort] = useState(false);

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

  const activePage = "Rent a car";

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (event.target.closest(".box") === null) {
        setShowSort(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const router = useRouter();

  return (
    <div className="font-gordita mb-[154px]">
      <Container>
        <Navigation
          color="text-brandGray-300"
          hover="hover:text-brandGreen-300"
          buttonBg="bg-brandGreen-300"
          buttonText="text-white"
          buttonHover="hover:bg-white"
          activePage={activePage}
          navBackground="white"
          menuColor="text-brandGreen-300"
        />
        <div className="mt-[40px] text-center text-[#214528] font-gordita-bold text-[48px] leading-[48px]">
          Find the right car for you
        </div>
        <div className="mt-[24px] text-[#242424] text-center leading-[21.76px]">
          You can find popular cars and the best offers at the top or filter/
          <br />
          search for your preferred car.
        </div>
        <div className="mt-[40px] flex w-full justify-center items-center">
          <div className="flex w-full md:w-[45%] p-[16px] pl-0 bg-[#f4f6f8] h-[48px] rounded-[8px] justify-center items-center">
            <input
              className="new_input bg-[unset] w-full px-[16px] placeholder:text-[#646668] h-[48px] rounded-[8px]"
              placeholder="search by car name"
            />
            <RiSearchLine />
          </div>
        </div>

        <div className="flex items-start gap-[32px]">
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

          <div className="w-full md:w-[82%] mt-[20px]">
            <div className="flex w-full justify-end">
              <div
                onClick={() => setShowSort((prev) => !prev)}
                className={`bg-[#E3F2E6] cursor-pointer w-full md:w-[30%] relative box flex  ${
                  showSort ? "rounded-[8px] rounded-b-none" : "rounded-[8px]"
                }  p-[16px] px-[10px] h-[48px] items-center gap-[12px]`}
              >
                <div className="text-[#0A3421] w-full">
                  Sort By: <span className="font-gordita-medium">{sortBy}</span>
                </div>

                <div>
                  <IoIosArrowDown />
                </div>

                {showSort ? (
                  <div className="absolute bg-white top-[50px] left-0 w-full border border-[#D4D6D8] rounded-[9px] rounded-t-none pb-0">
                    {sortings.map((item: any, i: any) => (
                      <div
                        key={i}
                        onClick={() => {
                          setSortBy(item);
                        }}
                        className="px-[16px] py-[16px] hover:bg-[#f4f6f8]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-[24px]">
              {cars.map((item: any, index) => (
                <div
                  className="border overflow-x-hidden rounded-[6px] py-[24px] px-[16px] pare"
                  key={index}
                >
                  <div className="font-gordita-bold text-[20px] text-[#242424]">
                    {item}
                  </div>
                  <div className="mt-[12px] text-[10px] text-[#646464]">
                    or any similar SUV
                  </div>

                  <div>
                    <img
                      src="../assets/car.jpg"
                      className="my-[16px] w-full car"
                    />
                  </div>

                  <div className="flex items-center  justify-between">
                    {carAccessories.map((item: any, i: any) => (
                      <div
                        key={i}
                        className="flex flex-col justify-center items-center"
                      >
                        <img className="h-[13px] object-contain w-[13px]" src={item.img} />
                        <div className="mt-[8px] text-[12px] text-[#646464] font-gordita-medium">
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-[24px] flex justify-between items-center">
                    <div className="text-[#242424] w-full">
                      <div className="font-gordita-bold text-[20px]">
                        ₦15,000 / day
                      </div>
                      <div className="mt-[16px] font-gordita-medium text-[14px]">
                        ₦45,000 Total
                      </div>
                    </div>

                    <div className="par">
                      <div
                        onClick={() =>
                          router.push(`/rent-a-car/${item}/bookings`)
                        }
                        className="cursor-pointer bg-[#214528] text-white flex justify-center items-center rounded-full h-[40px] w-[40px]"
                      >
                        <HiArrowLongRight className="arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RentVehicle;
