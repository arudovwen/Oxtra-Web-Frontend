import { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { carAccessories } from "./arrays";
import { formatDat, formatTime } from "@/helpers/helpers";
import { useGetNonUserVehicle } from "@/services/query/vehicle";

const Pick_Return = () => {
  const [rentValues, setRentValues] = useState({});

  useEffect(() => {
    // @ts-ignore
    const rent_values = JSON.parse(sessionStorage.getItem("rent-values"));
    setRentValues(rent_values);
  }, []);

  const { data, refetch } = useGetNonUserVehicle(
    // @ts-ignore
    rentValues?.vehicle_id,
    {
      refetchOnWindowFocus: true,
    }
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Flex flexDir="column" justifyContent="center" align="center" w="full">
      <Flex
        flexDir="column"
        justifyContent="center"
        align="center"
        w={{ base: "full", md: "932px" }}
      >
        <Flex
          justifyContent="space-between"
          border="1px solid #E4E4E4"
          borderRadius="12px"
          py="16px"
          align={{ base: "flex-start", md: "center" }}
          flexDir={{ base: "column", md: "row" }}
          w="100%"
          px="24px"
          gap="24px"
        >
          <Box
            w={{ base: "100%", md: "50%" }}
            display={"flex"}
            flexDir="column"
            gap="16px"
          >
            <Text color="#444444" fontSize="14px" fontWeight={500}>
              Pick-up
            </Text>
            <Text color="#646668">
              {/* @ts-ignore */}
              {rentValues?.rent_values?.pickup_location}
            </Text>
            <Text fontSize="12px" color="#444648" fontWeight={500}>
              {/* @ts-ignore */}
              {formatDat(rentValues?.rent_values?.pickUp)} · {/* @ts-ignore */}
              {formatTime(rentValues?.rent_values?.pickUp)}
            </Text>
          </Box>

          <Box
            w={{ base: "full", md: "unset" }}
            display={data?.data ? "block" : "none"}
          >
            <Flex
              align={{ base: "flex-start", md: "center" }}
              flexDir={{ base: "column", md: "row" }}
              gap="16px"
            >
              <Image
                src="../assets/car.jpg"
                w="100px"
                h="80px"
                objectFit="contain"
              />
              <Box w={{ base: "full", md: "unset" }}>
                <Text
                  fontSize="14px"
                  textTransform="capitalize"
                  fontWeight={500}
                  mb="16px"
                >
                  {data?.data?.brand} {data?.data?.model}{" "}
                  {`(${data?.data?.year})`}
                </Text>

                <Flex
                  align="center"
                  justifyContent={{ base: "space-between", md: "unset" }}
                  gap={{ base: "unset", md: "16px" }}
                >
                  <Flex
                    display={
                      data?.data?.extras?.find((item: any) => item === "AC") ===
                      "AC"
                        ? "flex"
                        : "hidden"
                    }
                    flexDir="column"
                    justifyContent="center"
                    align="center"
                  >
                    <Image
                      h="13px"
                      objectFit="contain"
                      w="13px"
                      src="../assets/ac.jpg"
                    />
                    <Text
                      mt="8px"
                      fontSize="12px"
                      color="#646464"
                      fontWeight={500}
                    >
                      AC
                    </Text>
                  </Flex>

                  <Flex flexDir="column" justifyContent="center" align="center">
                    <Image
                      h="13px"
                      objectFit="contain"
                      w="13px"
                      src="../assets/seater.jpg"
                    />
                    <Text
                      mt="8px"
                      fontSize="12px"
                      color="#646464"
                      fontWeight={500}
                    >
                      {data?.data?.no_of_seats} Seater
                    </Text>
                  </Flex>

                  <Flex flexDir="column" justifyContent="center" align="center">
                    <Image
                      h="13px"
                      objectFit="contain"
                      w="13px"
                      src="../assets/bags.jpg"
                    />
                    <Text
                      mt="8px"
                      fontSize="12px"
                      color="#646464"
                      fontWeight={500}
                    >
                      {data?.data?.boot_capacity} Bags
                    </Text>
                  </Flex>

                  <Flex flexDir="column" justifyContent="center" align="center">
                    <Image
                      h="13px"
                      objectFit="contain"
                      w="13px"
                      src="../assets/automatic.jpg"
                    />
                    <Text
                      mt="8px"
                      fontSize="12px"
                      textTransform="capitalize"
                      color="#646464"
                      fontWeight={500}
                    >
                      {data?.data?.transmission}
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Pick_Return;
