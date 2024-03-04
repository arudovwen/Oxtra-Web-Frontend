import { carBenefits, carFeatures } from "@/components/constants/arrays";
import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarFeatures = () => {
  const ref = useRef();
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        /* @ts-ignore */
        const scrollPosition = ref.current.scrollLeft;
        /* @ts-ignore */
        const maxScroll = ref.current.scrollWidth - ref.current.offsetWidth;
        if (scrollPosition >= maxScroll) {
          setEnd(true);
        } else {
          setEnd(false);
        }
        if (scrollPosition === 0) {
          setStart(true);
        } else {
          setStart(false);
        }
      }
    };

    if (ref.current) {
      /* @ts-ignore */
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref.current) {
        /* @ts-ignore */
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction: any) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -140 : +140;
      /* @ts-ignore */
      ref.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="w-full md:w-[496px]">
      <img
        src="/assets/new_car.jpg"
        className="h-[200px] w-full md:w-[unset] md:h-[290px]"
      />

      <div className="relative mt-[24px]">
        <div
          /* @ts-ignore */
          ref={ref}
          className="no_scroller flex overflow-x-scroll"
          style={{
            scrollBehavior: "smooth",
            transition: "0.5s ease-in-out",
          }}
        >
          <div
            onClick={() => scroll("left")}
            className={`${
              start ? "hidden" : "flex"
            } cursor-pointer absolute left-0 w-[24px] h-full flex items-center justify-center opacity-[0.8]`}
            style={{
              backgroundImage:
                "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 80%, #FFFFFF 100%);",
            }}
          >
            <IoIosArrowBack />
          </div>
          {Array(6)
            .fill(null)
            .map((item, index) => (
              <div
                key={index + 1}
                className="min-w-[104px] md:min-w-[124px] mr-[13px]"
              >
                <img
                  src="/assets/new_car.jpg"
                  className="h-[60px] md:h-[72px]"
                />
              </div>
            ))}

          <div
            onClick={() => scroll("right")}
            className={`${
              end ? "hidden" : "flex"
            } cursor-pointer absolute right-0 w-[24px] h-full flex items-center justify-center opacity-[0.8]`}
            style={{
              backgroundImage:
                "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 80%, #FFFFFF 100%);",
            }}
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      <div className="mt-[24px] pt-[24px] border-t border-[#E4E4E4]">
        <div className="flex flex-col md:flex-row items-start gap-[40px]">
          <div className="w-full">
            <div className="mb-[16px] text-[#42864F] font-gordita-bold text-[14px]">
              Features
            </div>

            <div className="grid grid-cols-4 gap-[24px]">
              {carFeatures.map((item: any, i: any) => (
                <div
                  key={i}
                  className={`${
                    i === 6 ? "col-span-2" : ""
                  }  flex flex-col justify-center items-center`}
                >
                  <img
                    className="h-[13px] w-[13px] object-contain"
                    src={item.img}
                  />
                  <div className="mt-[8px] text-[12px] text-[#646464] font-gordita-medium">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-[16px] text-[#42864F] font-gordita-bold text-[14px]">
              Benefits
            </div>
            {carBenefits.map((item: any, i: any) => (
              <div className="mb-[16px] flex text-[#42864F] items-center gap-[8px]">
                <div>
                  <FaCheck size="12px" />
                </div>

                <div className="text-[#646464] font-gordia-medium text-[12px]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFeatures;
