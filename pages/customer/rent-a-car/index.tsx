import Container from "@/layout/NonAuthLayout/Container";
import React, { useEffect, useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import Filters from "@/components/data/customer/rent-a-car/Filters";
import CarList from "@/components/data/customer/rent-a-car/CarList";
import { useGetUserVehicles } from "@/services/query/vehicle";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import DateTimePicker from "@/components/constants/DateTimePicker";
import GoBack from "@/components/constants/GoBack";
import { useRouter } from "next/router";
import { useLoadScript } from "@react-google-maps/api";

const RentVehicle = () => {
  const [filters, setFilters] = useState({
    brand: "",
    year: "",
    model: "",
    vehicle_type: "Regular",
    price_min: "",
    search: "",
    price_max: "",
  });

  const libraries = ["places"];
  const [suggestions, setSuggestions] = useState([]);
  const autocompleteRef = useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCgAZVD_PeXEVjb7NMpTzQ2XwDup7xGLE8",
    // @ts-ignore
    libraries,
  });

  const handleInputChange = (e: any) => {
    setValues({ ...values, pickup_location: e.target.value });

    if (!autocompleteRef.current) {
      // @ts-ignore
      autocompleteRef.current =
        new window.google.maps.places.AutocompleteService();
    }

    if (e.target.value) {
      // @ts-ignore
      autocompleteRef.current.getPlacePredictions(
        { input: e.target.value },

        (predictions: any, status: any) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setSuggestions(predictions);
          } else {
            setSuggestions([]);
          }
        }
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    setValues({ ...values, pickup_location: suggestion.description });
    setSuggestions([]);
  };

  const [values, setValues] = useState({
    pickUp: new Date(),
    dropOff: new Date(),
    pickup_location: "",
  });

  const { data, isLoading, refetch } = useGetUserVehicles(filters, {
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    refetch();
    sessionStorage.removeItem("rent_values");
  }, []);

  const router = useRouter();
  return isLoaded ? (
    <Box fontFamily="gordita" mb="154px">
      <GoBack onClick={() => router.back()} />
      <Flex
        flexDir={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        mt="40px"
        gap={{ base: "30px", md: "unset" }}
        justifyContent="space-between"
      >
        <Box>
          <Text
            color="#214528"
            fontWeight={700}
            fontSize={{ base: "30px", md: "48px" }}
            lineHeight={{ base: "30px", md: "48px" }}
          >
            Find the right car for you
          </Text>
          <Text
            my={{ base: "13px", md: "24px" }}
            fontSize={{ base: "14px", md: "16px" }}
            color="#444444"
            lineHeight="21.76px"
          >
            Find the best cars available for your preferred date
          </Text>
          <Box>
            <InputGroup w="100%">
              <Input
                value={filters?.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                h="48px"
                px="16px"
                _placeholder={{ color: "646668" }}
                bg="#f4f6f8"
                placeholder="search by car name"
                borderRadius="8px"
              />
              <InputRightElement>
                <RiSearchLine />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>

        <Flex flexDir="column" gap="24px" w={{ base: "100%", md: "35%" }}>
          <Box>
            <Text fontSize="14px" mb="8px" color="#444648" fontWeight={500}>
              Pick-up Location
            </Text>
            <Input
              border="1px solid #D4D6D8"
              placeholder="Enter address or airport"
              color="#000"
              _placeholder={{ color: "#646668" }}
              h="45px"
              value={values?.pickup_location}
              onChange={handleInputChange}
            />
            {suggestions.length > 0 && (
              <List
                h="12.5rem"
                overflowY="scroll"
                className="rent_scroll"
                mt="15px"
                boxShadow="lg"
              >
                {suggestions.map((suggestion) => (
                  <ListItem
                    p="10px"
                    cursor="pointer"
                    _hover={{ bg: "#f6f6f6" }}
                    fontSize="13px"
                    fontWeight={500}
                    // @ts-ignore
                    key={suggestion?.place_id}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {/* @ts-ignore */}
                    {suggestion.description}
                  </ListItem>
                ))}
              </List>
            )}
          </Box>

          <Flex align="center" gap="20px" w="100%">
            <Box w="100%">
              <Text fontSize="14px" mb="8px" color="#444648" fontWeight={500}>
                Pick-up Date
              </Text>
              <DateTimePicker
                selectedDate={values?.pickUp}
                onChange={(date: any) => {
                  setValues({ ...values, pickUp: date });
                }}
                hasTime
              />
            </Box>

            <Box w="100%">
              <Text fontSize="14px" mb="8px" color="#444648" fontWeight={500}>
                Drop-off Date
              </Text>
              <DateTimePicker
                selectedDate={values?.dropOff}
                onChange={(date: any) => {
                  setValues({ ...values, dropOff: date });
                }}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex align="flex-start" gap="32px" mt="40px">
        <Filters filterss={filters} setFilters={setFilters} />

        <Box w={{ base: "100%", md: "82%" }}>
          <Flex align="center" justifyContent="flex-end">
            <Flex
              border="1px solid #DDEEE0"
              justifyContent={{ base: "space-between", md: "unset" }}
              w={{ base: "100%", md: "unset" }}
              borderRadius="16px"
              p="6px"
            >
              {["Regular", "Electric"].map((item: any, i: any) => (
                <Flex
                  key={i}
                  bg={
                    filters?.vehicle_type === item ? "#DDEEE0" : "transparent"
                  }
                  borderRadius="12px"
                  py="10px"
                  px="20px"
                  justifyContent="center"
                  w={{ base: "100%", md: "unset" }}
                  cursor="pointer"
                  transition=".3s ease-in-out"
                  fontSize="12px"
                  fontWeight={500}
                  color="#444444"
                  _hover={{ color: "#214528" }}
                  onClick={() => setFilters({ ...filters, vehicle_type: item })}
                >
                  {item} Vehicles
                </Flex>
              ))}
            </Flex>
          </Flex>
          <CarList values={values} data={data} isLoading={isLoading} />
        </Box>
      </Flex>
    </Box>
  ) : (
    ""
  );
};

export default RentVehicle;
