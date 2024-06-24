import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text,
  Input,
  Checkbox,
  Button,
  Spinner,
} from "@chakra-ui/react";
import Select from "react-select";
import classNames from "classnames";
import { colorTypes } from "@/components/constants/arrays";
import { useRouter } from "next/router";
import { useGetBrands, useGetModels } from "@/services/query/vehicle";

const VehicleInformationForm = () => {
  const labelClasses = classNames(
    "text-[12px] text-[#4c4c4c] font-gordita-medium",
  );

  const [values, setValues] = useState({
    brand: "",
    model: "",
    year: "",
    transmission: "",
    color: "",
    doors: "",
    power: "",
    no_of_seats: "",
    boot_capacity: "",
    plate_number: "",
    vehicle_type: "",
    price_per_day: "",
    extras: [],
  });

  const handleToggleExtra = (name: any) => {
    // @ts-ignore
    setValues((values) => {
      // @ts-ignore
      const newExtras = values.extras.includes(name)
        ? values.extras.filter((extra) => extra !== name)
        : [...values.extras, name];

      return {
        ...values,
        extras: newExtras,
      };
    });
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "100%",
      minHeight: "44px",
      color: "#666666",
      fontSize: "16px",
      marginTop: "12px",
      cursor: "pointer",
      borderRadius: "8px",
      border: "1px solid #cccccc",
      paddingRight: "16px",
      background: "unset",
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

  const { data: brands, isLoading: isBrand } = useGetBrands();
  const { mutate, data: models, isLoading: isModel } = useGetModels();

  useEffect(() => {
    if (values?.brand) {
      // @ts-ignore
      mutate(values?.brand?.value);
    }
  }, [values?.brand]);

  const brandOptions = brands?.map((item: any) => ({
    label: item?.brand,
    value: item?.id,
  }));

  const modelOptions = models?.map((item: any) => ({
    label: item?.model,
    value: item?.id,
  }));

  const seatOptions = ["1", "2", "3", "4", "5"].map((item) => ({
    label: item,
    value: item,
  }));

  const typeOptions = ["Regular", "Electric"].map((item) => ({
    label: item,
    value: item,
  }));

  const colorOptions = colorTypes.map((color) => ({
    value: color.color,
    label: color.label,
  }));

  const getOptionLabel = (option: any) => (
    <Flex gap="8px" align="center">
      <Box
        width="28px"
        height="20px"
        backgroundColor={option.value}
        borderRadius="4px"
      />
      {option.label}
    </Flex>
  );

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const getOptionValue = (option: any) => option.value;

  const ColorOption = ({ data }: any) => (
    <Flex
      mt="-5px"
      onClick={() => {
        setValues({ ...values, color: data });
        setMenuIsOpen(false);
      }}
      px="10px"
      cursor="pointer"
      _hover={{ bg: "#f4f6f8" }}
      gap="8px"
      align="center"
      h="40px"
    >
      <Flex
        width="28px"
        height="20px"
        backgroundColor={data?.value}
        borderRadius="4px"
      ></Flex>
      {data?.label}
    </Flex>
  );

  const ColorOptio = ({ data }: any) => (
    <Flex mt="-30px" gap="8px" align="center" h="40px">
      <Flex
        width="28px"
        height="20px"
        backgroundColor={data?.value}
        borderRadius="4px"
      ></Flex>
      {data?.label}
    </Flex>
  );

  const transmissionOptions = ["Automatic", "Manual"].map((item) => ({
    label: item,
    value: item,
  }));

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const inputClasses = classNames(
    "mt-[12px] text-[14px]  text-[#666666] rounded-[8px] py-[14px] px-[16px] border border-[#cccccc]",
  );

  const [user, setUser] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser =
        // @ts-ignore
        JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    }
  }, []);

  const action = () => {
    setLoading(true);
    // @ts-ignore
    sessionStorage.setItem("vehicles", JSON.stringify(values));
    setTimeout(() => {
      setLoading(false);
      if (user) {
        router.push("/client/vehicles/create-step-2");
      } else {
        router.push("/register-car/images");
      }
    }, 2000);
  };

  const subClasses = classNames("text-[14px] text-[#344054]");

  return (
    <Box mt="-30px">
      <Text color="#444648" fontWeight={500} fontSize="24px">
        Vehicle Information
      </Text>
      <Text mt="16px" color="#646668" fontSize="14px">
        Please enter the required details to get started
      </Text>

      <Flex flexDir="column" w="full" gap="32px" mt="32px">
        <Flex w="full" align="center" gap="24px">
          <Box w="full">
            <Text className={labelClasses}>Brand</Text>
            <Select
              styles={customStyles}
              isDisabled={!brands?.length || isBrand}
              components={{
                IndicatorSeparator: () => (
                  <div style={{ display: "none" }}></div>
                ),
                // @ts-ignore
                DropdownIndicator: () => (isBrand ? <Spinner size="sm" /> : ""),
              }}
              value={values?.brand}
              onChange={(selectedOption) => {
                setValues({
                  ...values,
                  // @ts-ignore
                  brand: selectedOption,
                });
              }}
              // @ts-ignore
              options={brandOptions}
            />
          </Box>

          <Box w="full">
            <Text className={labelClasses}>Model</Text>
            <Select
              styles={customStyles}
              isDisabled={!values?.brand || isModel}
              components={{
                IndicatorSeparator: () => (
                  <div style={{ display: "none" }}></div>
                ),
                // @ts-ignore
                DropdownIndicator: () => (isModel ? <Spinner size="sm" /> : ""),
              }}
              value={values?.model}
              onChange={(selectedOption) => {
                setValues({
                  ...values,
                  // @ts-ignore
                  model: selectedOption,
                });
              }}
              // @ts-ignore
              options={modelOptions}
            />
          </Box>
        </Flex>

        <Flex w="full" align="center" gap="24px">
          <Box w="full">
            <Text className={labelClasses}>Year</Text>

            <Input
              h="44px"
              className={inputClasses}
              value={values?.year}
              onChange={(e) => {
                setValues({
                  ...values,
                  year: e.target.value,
                });
              }}
              type="number"
            />
          </Box>

          <Box w="full">
            <Text className={labelClasses}>Transmission</Text>
            <Select
              styles={customStyles}
              components={{
                IndicatorSeparator: () => (
                  <div style={{ display: "none" }}></div>
                ),
              }}
              value={values?.transmission}
              onChange={(selectedOption) => {
                setValues({
                  ...values,
                  // @ts-ignore
                  transmission: selectedOption,
                });
              }}
              // @ts-ignore
              options={transmissionOptions}
            />
          </Box>
        </Flex>

        <Flex w="full" align="center" gap="24px">
          <Box w="full">
            <Text className={labelClasses}>Seats</Text>
            <Select
              styles={customStyles}
              components={{
                IndicatorSeparator: () => (
                  <div style={{ display: "none" }}></div>
                ),
              }}
              value={values?.no_of_seats}
              onChange={(selectedOption) => {
                setValues({
                  ...values,
                  // @ts-ignore
                  no_of_seats: selectedOption,
                });
              }}
              // @ts-ignore
              options={seatOptions}
            />
          </Box>
          <Box w="full">
            <Text className={labelClasses}>Color</Text>
            <Select
              styles={customStyles}
              onMenuOpen={() => setMenuIsOpen(true)}
              menuIsOpen={menuIsOpen}
              onMenuClose={() => setMenuIsOpen(false)}
              components={{
                SingleValue: ColorOptio,
                Option: ColorOption,
                IndicatorSeparator: () => (
                  <div style={{ display: "none" }}></div>
                ),
              }}
              value={values?.color}
              onChange={(selectedOption) => {
                setValues({
                  ...values,
                  // @ts-ignore
                  color: selectedOption,
                });
              }}
              // @ts-ignore
              options={colorOptions}
              // @ts-ignore
              getOptionLabel={getOptionLabel}
              getOptionValue={getOptionValue}
            />
          </Box>
        </Flex>

        <Flex w="full" align="center" gap="24px">
          <Box w="full">
            <Text className={labelClasses}>Plate number</Text>

            <Input
              h="44px"
              className={inputClasses}
              value={values?.plate_number}
              onChange={(e) => {
                setValues({
                  ...values,
                  plate_number: e.target.value,
                });
              }}
            />
          </Box>

          <Box w="full">
            <Text className={labelClasses}>Boot capacity (Bags)</Text>
            <Select
              styles={customStyles}
              components={{
                IndicatorSeparator: () => (
                  <div style={{ display: "none" }}></div>
                ),
              }}
              value={values?.boot_capacity}
              onChange={(selectedOption) => {
                setValues({
                  ...values,
                  // @ts-ignore
                  boot_capacity: selectedOption,
                });
              }}
              // @ts-ignore
              options={seatOptions}
            />
          </Box>
        </Flex>

        <Flex w="full" align="center" gap="24px">
          <Box w="full">
            <Text className={labelClasses}>Doors</Text>
            <Select
              styles={customStyles}
              components={{
                IndicatorSeparator: () => (
                  <div style={{ display: "none" }}></div>
                ),
              }}
              value={values?.doors}
              onChange={(selectedOption) => {
                setValues({
                  ...values,
                  // @ts-ignore
                  doors: selectedOption,
                });
              }}
              // @ts-ignore
              options={seatOptions}
            />
          </Box>

          <Box w="full">
            <Text className={labelClasses}>Power</Text>
            <Select
              styles={customStyles}
              components={{
                IndicatorSeparator: () => (
                  <div style={{ display: "none" }}></div>
                ),
              }}
              value={values?.power}
              onChange={(selectedOption) => {
                setValues({
                  ...values,
                  // @ts-ignore
                  power: selectedOption,
                });
              }}
              // @ts-ignore
              options={transmissionOptions}
            />
          </Box>
        </Flex>

        <Flex w="full" align="center" gap="24px">
          <Box w="full">
            <Text className={labelClasses}>Vehicle Type</Text>
            <Select
              styles={customStyles}
              components={{
                IndicatorSeparator: () => (
                  <div style={{ display: "none" }}></div>
                ),
              }}
              value={values?.vehicle_type}
              onChange={(selectedOption) => {
                setValues({
                  ...values,
                  // @ts-ignore
                  vehicle_type: selectedOption,
                });
              }}
              // @ts-ignore
              options={typeOptions}
            />
          </Box>

          <Box w="full">
            <Text className={labelClasses}>Price Per Day</Text>

            <Input
              h="44px"
              className={inputClasses}
              type="number"
              value={values?.price_per_day}
              onChange={(e) => {
                setValues({
                  ...values,
                  price_per_day: e.target.value,
                });
              }}
            />
          </Box>
        </Flex>

        <Flex
          align="center"
          gap="20px"
          flexWrap={{ base: "wrap", md: "nowrap" }}
          justifyContent={{ base: "flex-start", md: "space-between" }}
        >
          <Flex
            align="center"
            gap="8px"
            cursor="pointer"
            onClick={() => handleToggleExtra("Reverse Camera")}
          >
            <Checkbox
              // @ts-ignore
              isChecked={values.extras.includes("Reverse Camera")}
              onChange={() => handleToggleExtra("Reverse Camera")}
            />
            <Text className={subClasses}>Reverse Camera</Text>
          </Flex>

          <Flex
            align="center"
            gap="8px"
            cursor="pointer"
            onClick={() => handleToggleExtra("Bluetooth Radio")}
          >
            <Checkbox
              // @ts-ignore
              isChecked={values.extras.includes("Bluetooth Radio")}
              onChange={() => handleToggleExtra("Bluetooth Radio")}
            />
            <Text className={subClasses}>Bluetooth Radio</Text>
          </Flex>

          <Flex
            align="center"
            gap="8px"
            cursor="pointer"
            onClick={() => handleToggleExtra("Air Bags")}
          >
            <Checkbox
              // @ts-ignore
              isChecked={values.extras.includes("Air Bags")}
              onChange={() => handleToggleExtra("Air Bags")}
            />
            <Text className={subClasses}>Air Bags</Text>
          </Flex>

          <Flex
            align="center"
            gap="8px"
            cursor="pointer"
            onClick={() => handleToggleExtra("AC")}
          >
            <Checkbox
              // @ts-ignore
              isChecked={values.extras.includes("AC")}
              onChange={() => handleToggleExtra("AC")}
            />
            <Text className={subClasses}>AC</Text>
          </Flex>
        </Flex>

        <Flex align="center" gap="24px">
          <Button
            bg="transparent"
            border="1px solid #646464"
            color="#646464"
            w="40%"
            h="48px"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            onClick={() => router.push("/register-car/images")}
            _focus={{ bg: "transparent" }}
          >
            Skip
          </Button>
          <Button onClick={action} isLoading={loading} w="60%" h="48px">
            Next
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default VehicleInformationForm;
