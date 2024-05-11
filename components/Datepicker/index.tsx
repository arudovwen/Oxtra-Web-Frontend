// @ts-nocheck 
import React, { useState, useEffect } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { FaCalendar, FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  className?: string;
  inputName?: string;
  register?: any;
  handleChange?: (value: Date) => void;
  defaultValue?: string | null;
  errors?: any;
  minDate?: Date | null;
  maxDate?: any;
  clearErrors?: (name?: string | string[]) => void;
  trigger?: any;
  placeholder?: string;
  id?: string;
  dateFormat?: string;
  disabled?: boolean
  showTimeSelect?: boolean
}

const DatePickerInput: React.FC<DatePickerProps> = ({
  inputName,
  handleChange,
  className,
  defaultValue,
  errors,
  minDate,
  maxDate,
  clearErrors,
  trigger,
  placeholder = "yyyy/mm/dd",
  dateFormat  = "dd/MM/yyyy",
  id,
  disabled,
  showTimeSelect
}: DatePickerProps) => {
  const [date, setDate] = useState<Date | null>(
    defaultValue ? new Date(defaultValue) : null
  );

  useEffect(() => {
    if (defaultValue) {
      setDate(new Date(defaultValue));
    }
  }, [defaultValue]);

  useEffect(() => {
    handleChange(date!); // Ensuring date is not null
  }, [date]);

  const MyContainer: React.FC<{ className: string }> = ({
    className,
    children,
  }) => (
    <div
      style={{
       
        background: "#ffffff",
        color: "#fff",
        borderRadius: "4px",
        boxShadow: "0px 4px 8px 0px rgba(5, 27, 68, 0.08)",
        width:"100%",
        borderColor:"#d4d6d8"
      }}
    >
      <CalendarContainer className={`w-full ${className}`}>
        <div style={{ position: "relative" }} className="w-full">{children}</div>
      </CalendarContainer>
    </div>
  );

  return (
    <div>
      <div className="relative flex items-center date-picker form_data mt-3 w-full">
        <DatePicker
          id={id}
          showIcon={false}
          dateFormat={dateFormat}
          data-testid="date-picker"
          selected={date}
          showTimeSelect={showTimeSelect}
          onChange={(date) => {
           if(disabled) return
           handleChange(date);
           setDate(date);
           clearErrors && clearErrors(inputName);
           trigger && trigger(inputName);
          }}
          calendarContainer={MyContainer}
          minDate={minDate}
          maxDate={maxDate}
          disabled={disabled}
          placeholderText={placeholder}
          className={`placeholder-[#BCBBBB] px-2 py-2 border rounded  text-sm w-full h-[40px] ${className} disabled:bg-white placeholder:text-[#BCBBBB] ${
            errors && errors[inputName] ? "border-red-600" : "border-[#d4d6d8]"
          }`}
        />
        <span className="absolute right-[14px] text-brandGreen-300">
          {" "}
          <FaRegCalendarAlt />
        </span>
      </div>
      {errors && errors[inputName] && (
        <span className="text-sm text-danger-500">
          {errors[inputName]?.message}
        </span>
      )}
    </div>
  );
};

export default DatePickerInput;
