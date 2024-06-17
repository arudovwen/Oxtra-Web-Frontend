import React from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { formatNewDates } from "@/helpers/helpers";

interface DateTimePickerProps {
  onChange: (date: string) => void;
  selectedDate?: Date | string;
  hasTime?: boolean;
  isDisabled?: boolean;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  onChange,
  selectedDate = new Date(),
  hasTime = false,
  isDisabled = false,
}) => {
  const { onOpen } = useDisclosure();

  const handleDateChange = (date: Date) => {
    const formattedDate = formatNewDates(date, null, hasTime);
    onChange(formattedDate);
  };

  const parsedDate = new Date(selectedDate);
  if (isNaN(parsedDate.getTime())) {
    console.error("Invalid date provided:", selectedDate);
    return <Box color="red">Invalid date provided.</Box>;
  }

  return (
    <Flex align="center">
      {/* @ts-ignore */}
      <DatePicker
        selected={parsedDate}
        disabled={isDisabled}
        // @ts-ignore
        onChange={handleDateChange}
        showTimeSelect={hasTime}
        timeFormat="hh:mm aa"
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="MM/dd/yyyy, hh:mm aa"
        popperPlacement="bottom-end"
        showMonthDropdown
        showYearDropdown
        showMonthYearDropdown
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }: any) => (
          <Flex justifyContent="space-between" px="10px">
            <IoIosArrowBack
              size="18px"
              cursor={prevMonthButtonDisabled ? "not-allowed" : "pointer"}
              onClick={() => !prevMonthButtonDisabled && decreaseMonth()}
            />

            <Select
              bg="transparent"
              h="20px"
              fontSize="14px"
              w="fit-content"
              cursor="pointer"
              value={date.getMonth()}
              onChange={(e) => changeMonth(parseInt(e.target.value))}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {new Date(0, i).toLocaleString("en", { month: "long" })}
                </option>
              ))}
            </Select>

            <Select
              bg="transparent"
              h="20px"
              fontSize="14px"
              w="fit-content"
              cursor="pointer"
              value={date.getFullYear()}
              onChange={(e) => changeYear(parseInt(e.target.value))}
            >
              {Array.from({ length: 300 }, (_, i) => (
                <option key={i} value={i + 1900}>
                  {i + 1900}
                </option>
              ))}
            </Select>

            <IoIosArrowForward
              size="18px"
              cursor={nextMonthButtonDisabled ? "not-allowed" : "pointer"}
              onClick={() => !nextMonthButtonDisabled && increaseMonth()}
            />
          </Flex>
        )}
        customInput={
          <Box
            as={Button}
            onClick={onOpen}
            rightIcon={<Icon as={CalendarIcon} />}
            h={"44px"}
            w="100%"
            justifyContent={"space-between"}
            bg="#fff"
            color={"#000"}
            border={"1px solid #D4D6D8"}
            fontWeight={400}
            textAlign={"left"}
          >
            {formatNewDates(parsedDate, null, hasTime)}
          </Box>
        }
      />
    </Flex>
  );
};

export default DateTimePicker;
