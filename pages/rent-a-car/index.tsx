import Container from "@/layout/NonAuthLayout/Container";
import Navigation from "@/layout/NonAuthLayout/Navigation";
import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { sortings } from "@/components/constants/arrays";
import Filters from "@/components/data/rent-a-car/Filters";
import CarList from "@/components/data/rent-a-car/CarList";

const RentVehicle = () => {
  const [sortBy, setSortBy] = useState(sortings[0]);
  const [showSort, setShowSort] = useState(false);

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
          <Filters />

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

            <CarList />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RentVehicle;
