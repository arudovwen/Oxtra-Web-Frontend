import { useGetBrands, useGetModels } from "@/services/query/vehicle";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Select from "react-select";

const Filters = ({ filterss, setFilters }: any) => {
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

  const { data: brands, isLoading: isBrand } = useGetBrands();
  const { mutate, data: models, isLoading: isModel } = useGetModels();

  const brandOptions = brands?.map((item: any) => ({
    label: item?.brand,
    value: item?.id,
  }));

  const modelOptions = models?.map((item: any) => ({
    label: item?.model,
    value: item?.id,
  }));

  const handleFilterChange = (selectedOption: any, index: number) => {
    const newFilters = { ...filterss };

    switch (index) {
      case 0: // Price
        const [minPrice, maxPrice] = selectedOption.value
          .split(" - ")
          .map((price: string) => price.replace(/[^\d]/g, ""));
        newFilters.price_min = minPrice;
        newFilters.price_max = maxPrice;
        break;
      case 1: // Brand
        newFilters.brand = selectedOption.label;
        mutate(selectedOption?.value);
        newFilters.model = "";
        break;
      case 2: // Model
        newFilters.model = selectedOption.label;
        break;
      default:
        break;
    }

    setFilters(newFilters);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filterss, year: e.target.value };
    setFilters(newFilters);
  };

  const filters = [
    {
      name: "Price",
      options: [
        { label: "₦5,000 - ₦15,000", value: "5000 - 15000" },
        { label: "₦15,000 - ₦30,000", value: "15000 - 30000" },
        { label: "₦30,000 - ₦60,000", value: "30000 - 60000" },
      ],
    },
    {
      name: "Car Brand",
      options: brandOptions,
    },
    {
      name: "Model",
      options: modelOptions,
    },
  ];

  return (
    <Box display={{ base: "none", md: "block" }} w="18%" mt={20}>
      <Text fontWeight={500} color="#242424">
        Filters
      </Text>

      <Box mt="16px">
        {filters.map((item: any, i: any) => (
          <div key={i} className="mb-[24px]">
            <Select
              // @ts-ignore
              isDisabled={
                i === 1
                  ? isBrand
                    ? true
                    : false
                  : i === 2
                    ? isModel || !filterss?.brand
                      ? true
                      : false
                    : ""
              }
              styles={customStyles}
              components={{
                IndicatorSeparator: () => (
                  <div style={{ display: "none" }}></div>
                ),
                DropdownIndicator: () =>
                  i === 1 ? (
                    isBrand ? (
                      <Spinner size="sm" />
                    ) : (
                      <IoIosArrowDown size="16px" />
                    )
                  ) : i === 2 ? (
                    isModel ? (
                      <Spinner size="sm" />
                    ) : (
                      <IoIosArrowDown size="16px" />
                    )
                  ) : (
                    <IoIosArrowDown size="16px" />
                  ),
              }}
              options={item?.options}
              placeholder={item?.name}
              onChange={(selectedOption) =>
                handleFilterChange(selectedOption, i)
              }
            />
          </div>
        ))}
        <Box>
          <Input
            type="number"
            value={filterss?.year}
            onChange={handleYearChange}
            placeholder="Year"
            w="full"
            h="48px"
            color="#000"
            pl="16px"
            _placeholder={{ pl: 0, color: "#646668" }}
            border={filterss?.year ? "none" : "1px solid #D4D6D8"}
            bg={filterss?.year ? "#f4f6f8" : "transparent"}
            borderRadius="8px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Filters;
