import Loader from "@/components/constants/Loader";
import {
  formatDate,
  formatHour,
  formatNewDate,
  formatTimeMinute,
  formatTimeToHHMMSS,
} from "@/helpers/helpers";
import classNames from "classnames";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import DatePicker from "react-multi-date-picker";
import Select from "react-select";

const CarBooking = ({
  car_name,
  availability,
  setAvailability,
  setStep,
}: any) => {
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
  const [values, setValues] = useState({
    arrivalTime: "",
    departureTime: "",
  });

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
    2
  )}-${startDate.substr(3, 2)}T${formatTimeToHHMMSS(
    /* @ts-ignore */
    values?.arrivalTime?.value
  )}.000Z`;
  const formattedDeparture = `${endDate.substr(6, 4)}-${endDate.substr(
    0,
    2
  )}-${endDate.substr(3, 2)}T${formatTimeToHHMMSS(
    /* @ts-ignore */
    values?.departureTime?.value
  )}.000Z`;

  const [loading, setLoading] = useState(false);

  const searching = () => {
    setLoading(true);
    setTimeout(() => {
      setAvailability(true);
      setLoading(false);
    }, 2000);
  };

  const labelClasses = classNames(
    "text-[#444648] font-gordita-medium text-[14px]"
  );

  const inputClasses = classNames(
    "w-full border border-[#E4E4E4] h-[48px] rounded-[8px] p-[16px]"
  );

  return (
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
              onChange={(selectedOption: any) => {
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
              onChange={(selectedOption: any) => {
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

        {startDate &&
          endDate &&
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
                Includes up to 10 users, 20GB indiviual data and access to all
                features.
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
            } hover:opacity-[0.8] flex items-center justify-center bg-[#42864F] text-white rounded-[8px] w-full text-[14px] h-[48px]`}
          >
            {loading ? (
              <Loader type="spin" width={18} height={18} color="#fff" />
            ) : availability ? (
              "Proceed"
            ) : (
              "Search Availablity"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarBooking;
