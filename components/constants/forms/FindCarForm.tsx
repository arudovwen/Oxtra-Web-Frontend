import React from "react";
import classNames from "classnames";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { SyntheticEvent } from "react";
import { rentVehicle } from "@/services/vehicleservices";
// @ts-ignore 
import DatePickerInput from "@/components/DatePicker/index";

const inputClasses = classNames(
  "px-2 py-2 border rounded border-[#d4d6d8] mt-3  w-full h-[40px]"
);

const labelClasses = classNames(
  "font-gordita-medium text-brandGray-300 text-xs lg:text-sm"
);

const FindCarForm = () => {
  const [pickup_location, setPickupLocation] = useState("");
  const [pickup_date, setPickupDate] = useState("");
  const [trip_type, setTripType] = useState("5");
  const [hours, setHours] = useState("");
  const [pickup_time, setPickupTime] = useState("");
  const [price, setPrice] = useState("5");
  const [fee, setFee] = useState("4");
  const [days, setDays] = useState("4");
  const [vehicle_id, setVehicleId] = useState("9");
  const [dailyTrip, setDailyTrip] = useState(false);
  const [value, setValue] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const { token } = useAuth();

  const config = { headers: { Authorization: `Bearer ${token}` } };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const rentVehicleInfo = {
      pickup_location,
      pickup_date,
      hours,
      pickup_time,
      price,
      fee,
      vehicle_id,
      trip_type,
    };

    rentVehicle(rentVehicleInfo, config)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <form className="flex items-center flex-col lg:flex-row gap-[20px]">
      <div className="flex-1 flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 lg:gap-x-5 w-full lg:w-auto">
        <div className="flex-1">
          <label htmlFor="Pick up location" className={labelClasses}>
            Pick up location
          </label>
          <input
            type="text"
            placeholder="Enter address or airport"
            className={inputClasses}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="pick up Date" className={labelClasses}>
            Pick up Date & Time
          </label>
          <DatePickerInput handleChange={() => {}} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" />
        </div>
   
        <div className="flex-1">
          <label htmlFor="Return Date & Time" className={labelClasses}>
            Return Date & Time
          </label>
          <DatePickerInput handleChange={() => {}} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" />
        </div>
      </div>

      <div className="bg-brandGreen-300 text-white py-2 lg:py-6 flex flex-col items-center justify-center  col-span-full xl:col-auto rounded cursor-pointer lg:h-[72px] w-full lg:w-[72px]">
        <GoSearch className="w-[26px] h-[26px]" />
      </div>
    </form>
  );
};

export default FindCarForm;
