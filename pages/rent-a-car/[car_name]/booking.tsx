import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import { carBenefits, carFeatures } from "@/components/constants/arrays";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { FaCheck, FaRegCircle } from "react-icons/fa";
import {
  formatDate,
  formatHour,
  formatNewDate,
  formatTimeMinute,
  formatTimeToHHMMSS,
} from "@/helpers/helpers";
import DatePicker from "react-multi-date-picker";
import Select from "react-select";
import Loading from "@/components/Loading";
import classNames from "classnames";

const Bookings = () => {
  const activePage = "Rent a car";

  const router = useRouter();
  const { car_name } = router.query;
  const [step, setStep] = useState(1);
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
  const [values, setValues] = useState({
    arrivalTime: "",
    departureTime: "",
  });

  const [driverType, setDriverType] = useState("I'll drive by myself");
  const [tripType, setTripType] = useState("Daily");

  const [startValue, startChange] = useState("");
  const [endValue, endChange] = useState("");

  const startDate = formatNewDate(startValue);
  const startDateRange = new Date();
  const endDate = formatNewDate(endValue);

  const today = new Date();
  const firstHour = formatHour(today);
  const lastMinute = formatTimeMinute(today);
  const generateTimeArrays = (date: any) => {
    const times = [];
    const shouldStartFromNow = formatNewDate(date) === formatNewDate(today);
    const startHour = shouldStartFromNow
      ? Number(lastMinute) === 45 || Number(lastMinute) === 0
        ? Number(firstHour) + 1
        : Number(firstHour)
      : 0;
    const startMinute = shouldStartFromNow
      ? Number(lastMinute) === 45
        ? 0
        : Number(lastMinute)
      : 0;
    for (let hour = startHour; hour < 24; hour++) {
      for (let minute = startMinute; minute < 60; minute += 15) {
        const isPM = hour >= 12;
        const hourFormatted = (hour % 12 || 12).toString().padStart(2, "0");
        const minuteFormatted = minute.toString().padStart(2, "0");
        const period = isPM ? "PM" : "AM";
        const time = `${hourFormatted}:${minuteFormatted} ${period}`;
        times.push(time);
      }
    }

    return times;
  };

  const timeArrays = generateTimeArrays(startValue);
  const timeArray = generateTimeArrays(endValue);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "100%",
      minHeight: "48px",
      color: "#646668",
      fontSize: "14px",
      cursor: "pointer",
      borderRadius: "8px",
      border: "1px solid #E4E4E4",
      background: "unset",
    }),
    menu: (provided: any) => ({
      ...provided,
      fontSize: "13px",
      backgroundColor: "#fff",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isFocused ? "" : "",
      backgroundColor: state.isFocused ? "#f4f6f8" : "",
    }),
  };

  const handleSelectChange = (selectedOption: any, { name }: any) => {
    setValues({
      ...values,
      [name]: selectedOption,
    });
  };

  const timeOption = timeArray?.map((time) => ({
    value: time,
    label: time,
  }));
  const timeOptions = timeArrays?.map((time) => ({
    value: time,
    label: time,
  }));

  const formattedDate = `${startDate.substr(6, 4)}-${startDate.substr(
    0,
    2,
  )}-${startDate.substr(3, 2)}T${formatTimeToHHMMSS(
    /* @ts-ignore */
    values?.arrivalTime?.value,
  )}.000Z`;
  const formattedDeparture = `${endDate.substr(6, 4)}-${endDate.substr(
    0,
    2,
  )}-${endDate.substr(3, 2)}T${formatTimeToHHMMSS(
    /* @ts-ignore */
    values?.departureTime?.value,
  )}.000Z`;

  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState(false);

  const searching = () => {
    setLoading(true);
    setTimeout(() => {
      setAvailability(true);
      setLoading(false);
    }, 2000);
  };

  const labelClasses = classNames(
    "text-[#444648] font-gordita-medium text-[14px]",
  );

  const dataClasses = classNames("text-[#242424] font-gordita-bold");

  const parClasses = classNames("flex items-center justify-between");

  const inputClasses = classNames(
    "w-full border border-[#E4E4E4] h-[48px] rounded-[8px] p-[16px]",
  );

  return (
    <div className="font-gordita mb-[108px]">
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

        <div className="mt-[40px] md:mt-[72px]">
          <div className="flex items-center gap-[16px] w-fit font-gordita-medium text-[12px] md:text-[16px]">
            <div className={`text-[#444648]`} onClick={() => router.push("/")}>
              Home
            </div>
            <div className="mb-[3px]">
              <RiArrowRightDoubleLine />
            </div>
            <div
              onClick={() => router.push("/rent-a-car")}
              className="text-[#444648]"
            >
              Find Vehicle
            </div>
            <div className="mb-[3px]">
              <RiArrowRightDoubleLine />
            </div>
            <div
              onClick={() => {
                setStep(2);
                setAvailability(false);
              }}
              className={`${
                step === 2 ? "text-[#D4D4D4]" : "text-[#444648] cursor-pointer"
              }`}
            >
              {car_name}
            </div>
            <div className={`${step === 3 ? "flex" : "hidden"} mb-[3px]`}>
              <RiArrowRightDoubleLine />
            </div>
            <div
              onClick={() => setStep(3)}
              className={`${
                step === 3
                  ? "text-[#D4D4D4] flex"
                  : "text-[#444648] hidden cursor-pointer"
              }`}
            >
              Booking Details
            </div>
          </div>
        </div>

        <div
          className={`${
            step === 3 ? "hidden" : "flex"
          } mt-[24px] flex items-start md:flex-row flex-col gap-[40px]`}
        >
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

          <div className="w-full md:w-[48%]">
            <div className="text-[#242424] font-gordita-bold text-[30px] md:text-[40px]">
              {car_name}
            </div>

            {/* @ts-ignore */}
            <div className="mt-[24px] border border-[#E4E4E4] rounded-[16px] py-[32px] px-[24px]">
              <div className="flex items-center gap-[24px]">
                {["Daily", "Hourly"].map((item: any, i: any) => (
                  <div
                    className="flex items-center gap-[8px] cursor-pointer"
                    key={i}
                    onClick={() => setTripType(item)}
                  >
                    <img
                      className="w-[16px] h-[16px] object-contain mb-[4px]"
                      src={
                        i === 0
                          ? tripType === "Daily"
                            ? "../../assets/yingyang-green.jpg"
                            : "../../assets/yingyang.jpg"
                          : tripType === "Hourly"
                            ? "../../assets/yingyang-green.jpg"
                            : "../../assets/yingyang.jpg"
                      }
                    />
                    <div
                      className={`${
                        i === 0
                          ? tripType === "Daily"
                            ? "font-gordita-medium"
                            : "font-gordita-regular"
                          : tripType === "Hourly"
                            ? "font-gordita-medium"
                            : "font-gordita-regular"
                      } font-gordita-medium`}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[24px]">
                <div className={labelClasses}>Pick-up location</div>

                <div className="mt-[12px]">
                  <input
                    className={inputClasses}
                    placeholder="Enter address or airport"
                  />
                </div>
              </div>

              <div className="my-[24px]">
                <div className={labelClasses}>Return location</div>

                <div className="mt-[12px]">
                  <input
                    className={inputClasses}
                    placeholder="Enter address or airport"
                  />
                </div>
              </div>

              <div className="flex items-center flex-col md:flex-row gap-[24px]">
                <div className="w-full">
                  <div className={labelClasses}>Pick up Date</div>

                  <div className="mt-[12px]">
                    <DatePicker
                      placeholder="Select Date"
                      value={startValue}
                      minDate={startDateRange}
                      onChange={(date: any) => {
                        startChange(date);
                      }}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className={`mb-[12px] ${labelClasses}`}>Time</div>
                  <Select
                    styles={customStyles}
                    placeholder="Select Time"
                    /* @ts-ignore */
                    options={timeOptions}
                    value={values?.arrivalTime}
                    defaultValue={values?.arrivalTime}
                    onChange={(selectedOption) => {
                      handleSelectChange(selectedOption, {
                        name: "arrivalTime",
                      });
                    }}
                    components={{
                      IndicatorSeparator: () => (
                        <div style={{ display: "none" }}></div>
                      ),
                      DropdownIndicator: () => (
                        <div className="mr-[16px]">
                          <IoIosArrowDown size="20px" />
                        </div>
                      ),
                    }}
                  />
                </div>
              </div>

              <div className="my-[24px] flex items-center flex-col md:flex-row gap-[24px]">
                <div className="w-full">
                  <div className={labelClasses}>Return Date</div>

                  <div className="mt-[12px]">
                    <DatePicker
                      placeholder="Select Date"
                      value={endValue}
                      minDate={formatDate(startValue)}
                      onChange={(date: any) => {
                        endChange(date);
                      }}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className={`mb-[12px] ${labelClasses}`}>Time</div>
                  <Select
                    styles={customStyles}
                    placeholder="Select Time"
                    isDisabled={!values?.arrivalTime}
                    /* @ts-ignore */
                    options={timeOption}
                    value={values?.departureTime}
                    defaultValue={values?.departureTime}
                    onChange={(selectedOption) => {
                      handleSelectChange(selectedOption, {
                        name: "departureTime",
                      });
                    }}
                    components={{
                      IndicatorSeparator: () => (
                        <div style={{ display: "none" }}></div>
                      ),
                      DropdownIndicator: () => (
                        <div className="mr-[16px]">
                          <IoIosArrowDown size="20px" />
                        </div>
                      ),
                    }}
                  />
                </div>
              </div>

              {start &&
                end &&
                values?.arrivalTime &&
                values?.departureTime &&
                formattedDeparture < formattedDate && (
                  <div className="mt-[8px] text-[14px] text-[red]">
                    Departure Date is earlier than Arrival Date
                  </div>
                )}

              <div>
                <div className={labelClasses}>Number of Days</div>

                <div className="mt-[12px]">
                  <input className={inputClasses} type="number" />
                </div>
              </div>

              {availability ? (
                <div className="mt-[24px] bg-[#DDEEE0] flex items-start gap-[16px] border-[3px] border-[#F4EBFF] rounded-[8px] p-[16px]">
                  <div className="rounded-full p-[2px] bg-[#F4EBFF]">
                    <IoCheckmarkCircle size="20px" color="#438950" />
                  </div>

                  <div className="text-[14px]">
                    <div className="font-gordita-bold text-[#0A3421]">
                      Vehicle Available{" "}
                    </div>
                    <div className="mt-[5px] text-[#438950]">
                      Includes up to 10 users, 20GB indiviual data and access to
                      all features.
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="mt-[24px]">
                <button
                  onClick={() => (availability ? setStep(3) : searching())}
                  disabled={loading}
                  className={`${
                    loading ? "cursor-not-allowed" : ""
                  } hover:opacity-[0.8] bg-[#42864F] text-white rounded-[8px] w-full text-[14px] h-[48px]`}
                >
                  {loading ? (
                    <Loading type="spin" width={18} height={18} color="#fff" />
                  ) : availability ? (
                    "Proceed"
                  ) : (
                    "Search Availablity"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            step === 3 ? "flex" : "hidden"
          } flex-col md:flex-row items-start gap-[40px] mt-[32px]`}
        >
          <div className="w-full md:w-[496px]">
            <div className="border border-[#E4E4E4] rounded-[12px] p-[24px]">
              <div className={dataClasses}>Pick up and Return</div>

              <div className="mt-[16px] flex items-start gap-[16px]">
                <div className="relative">
                  <FaRegCircle color="#42864F" size="16px" />
                  <div className="flex justify-center items-center">
                    <div className="w-[1px] h-[80px] my-[12px] bg-[#C4C4C4]"></div>
                  </div>
                  <FaRegCircle color="#42864F" size="16px" />
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div className="text-[#444444] font-gordita-medium text-[14px]">
                    Pick-up
                  </div>
                  <div className="text-[#646668]">
                    3 Folake Kamoru Street, Lekki
                  </div>
                  <div className="text-[#444648] font-gordita-medium text-[12px]">
                    Sat, 17 Feb · 10:00
                  </div>
                  <div className="mt-[8px] flex items-start gap-[16px]">
                    <div className="flex flex-col gap-[16px]">
                      <div className="text-[#444444] font-gordita-medium text-[14px]">
                        Return
                      </div>
                      <div className="text-[#646668]">MM1 Airport</div>
                      <div className="text-[#444648] font-gordita-medium text-[12px]">
                        Tue, 20 Feb · 10:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                onClick={() => {
                  setStep(2);
                  setAvailability(false);
                }}
                className="cursor-pointer flex justify-end text-[#214528] mt-[16px] font-gordita-medium text-[12px]"
              >
                Change?
              </div>
            </div>

            <div className="mt-[20px] flex items-center gap-[16px] border border-[#E4E4E4] rounded-[12px] p-[15px] md:p-[24px] md:pb-0 md:pr-0">
              <div>
                <div className="font-gordita-bold text-[#242424]">Vehicle</div>

                <div className="mt-[12px]">
                  <img
                    src="/assets/car.jpg"
                    className="w-[226px] h-[180px] object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2">
                {carFeatures.map((item: any, i: any) => (
                  <div
                    key={i}
                    className={`gap-[8px] mb-[15px] flex items-center`}
                  >
                    <img
                      className="h-[13px] w-[13px] object-contain"
                      src={item.img}
                    />
                    <div className="text-[12px] text-[#646464] font-gordita-medium">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-[48%] md:h-[37.5rem] flex flex-col">
            <div className="border border-[#E4E4E4] rounded-[12px] p-[24px]">
              <div className="font-gordita-bold text-[#242424]">Driver</div>

              <div className="mt-[16px] flex items-start md:items-center md:flex-row flex-col gap-[24px]">
                {["I'll drive by myself", "I need a driver"].map(
                  (item: any, i: any) => (
                    <div
                      className="flex items-center gap-[8px] cursor-pointer"
                      key={i}
                      onClick={() => setDriverType(item)}
                    >
                      <img
                        className="w-[16px] h-[16px] object-contain mb-[4px]"
                        src={
                          i === 0
                            ? driverType === "I'll drive by myself"
                              ? "../../assets/yingyang-green.jpg"
                              : "../../assets/yingyang.jpg"
                            : driverType === "I need a driver"
                              ? "../../assets/yingyang-green.jpg"
                              : "../../assets/yingyang.jpg"
                        }
                      />
                      <div
                        className={`${
                          i === 0
                            ? driverType === "I'll drive by myself"
                              ? "font-gordita-medium"
                              : "font-gordita-regular"
                            : driverType === "I need a driver"
                              ? "font-gordita-medium"
                              : "font-gordita-regular"
                        } font-gordita-medium`}
                      >
                        {item}
                      </div>
                    </div>
                  ),
                )}
              </div>

              <div
                className={`${
                  driverType.includes("driver") ? "block" : "hidden"
                } mt-[18px]`}
              >
                <div className="text-#444648] text-[12px] font-gordita-bold">
                  Add note to driver
                </div>

                <div>
                  <input
                    className="h-[75px] mt-[12px] w-full border border-[#C4C6C8] rounded-[8px] p-[16px] text-[#646668] text-[14px]"
                    placeholder="Enter any special requests for the order"
                  />
                </div>
              </div>
            </div>

            <div className="mt-[20px] border border-[#E4E4E4] rounded-[12px] p-[24px]">
              <div className="font-gordita-bold text-[#242424]">
                Price Breakdown
              </div>

              <div
                className={`flex flex-col ${
                  driverType.includes("driver")
                    ? "gap-[24px] md:gap-[18px] mt-[24px] md:mt-[18px]"
                    : "mt-[24px] gap-[24px]"
                }`}
              >
                <div className={parClasses}>
                  <div className="text-[#646464]">Vehicle price per day</div>
                  <div className={dataClasses}>₦12,000</div>
                </div>

                <div className={parClasses}>
                  <div className="text-[#646464]">No. of days</div>
                  <div className={dataClasses}>3</div>
                </div>

                <div className={parClasses}>
                  <div className="text-[#646464]">Driver Service</div>
                  <div className={dataClasses}>
                    {driverType.includes("driver") ? "₦5,000" : "No"}
                  </div>
                </div>

                <div className="h-[1px] w-full bg-[#E4E4E4]"></div>

                <div className={parClasses}>
                  <div className="text-[#646464]">Total</div>
                  <div className={dataClasses}> ₦41,000</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                localStorage.setItem("checkout", "checkout");
                router.push("/signup");
              }}
              className="hover:opacity-[0.8] mt-[22px] md:mt-auto mt-[22px] text-white w-full h-[48px] bg-[#42864F] rounded-[8px]"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bookings;
