import React from "react";
import { formatDat, formatTime } from "@/helpers/helpers";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaRegCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const TripDetails = ({
  data,
  values,
  calculateDayDifference,
  dataClasses,
}: any) => {
  const router = useRouter();

  return (
    <Box fontFamily="gordita" w={{ base: "100%", md: "496px" }}>
      <Box border="1px solid #e4e4e4" borderRadius="12px" p="24px">
        <Text className={dataClasses}>Pick up</Text>

        <Box mt="16px">
          <Flex align="flex-start" gap="16px">
            <FaRegCircle color="#42864F" size="16px" />

            <Flex flexDir="column" gap="16px">
              <Text color="#444444" fontWeight={500} fontSize="14px">
                Pick-up
              </Text>
              <Text color="#646668">
                {values?.rent_values?.pickup_location}
              </Text>
              <Text color="#444648" fontWeight={500} fontSize="12px">
                {formatDat(values?.rent_values?.pickUp)} ·{" "}
                {formatTime(values?.rent_values?.pickUp)}
              </Text>
            </Flex>
          </Flex>

          <Box mt="15px">
            <Text mb="8px" color="#444648" fontWeight={500} fontSize="14px">
              Number of Days
            </Text>

            <Flex
              align="center"
              justifyContent="space-between"
              border="1px solid #d4d6d8"
              borderRadius="3px"
              p="10px"
            >
              <Text color="#646668">
                {calculateDayDifference(
                  values?.rent_values?.pickUp,
                  values?.rent_values?.dropOff
                )}
              </Text>
              <IoIosArrowDown size="16px" />
            </Flex>
          </Box>
        </Box>

        <Text
          cursor="pointer"
          textAlign="end"
          color="#214528"
          mt="16px"
          fontWeight={500}
          fontSize="12px"
          onClick={() => router.back()}
        >
          Change?
        </Text>
      </Box>

      <Flex
        align="center"
        gap="16px"
        mt="20px"
        border="1px solid #e4e4e4"
        borderRadius="12px"
        p={{ base: "15px", md: "24px" }}
        pb={{ base: "15px", md: "0" }}
        pr={{ base: "15px", md: "0" }}
      >
        <Box>
          <Text color="#242424" fontWeight={700}>
            Vehicle
          </Text>

          <Box mt="12px" className="mt-[12px]">
            <Image
              w="226px"
              h="180px"
              objectFit="contain"
              src="/assets/car.jpg"
            />
          </Box>
        </Box>

        <Grid templateColumns="repeat(2,1fr)">
          <Flex
            display={
              data?.data?.extras?.find((item: any) => item === "AC") === "AC"
                ? "flex"
                : "hidden"
            }
            align="center"
            mb="15px"
            gap="8px"
          >
            <Image h="13px" w="13px" objectFit="contain" src="/assets/ac.jpg" />
            <Text color="#646464" fontSize="12px" fontWeight={500}>
              AC
            </Text>
          </Flex>

          <Flex align="center" mb="15px" gap="8px">
            <Image
              h="13px"
              w="13px"
              objectFit="contain"
              src="/assets/seater.jpg"
            />
            <Text color="#646464" fontSize="12px" fontWeight={500}>
              {data?.data?.no_of_seats} Seater
            </Text>
          </Flex>

          <Flex align="center" mb="15px" gap="8px">
            <Image
              h="13px"
              w="13px"
              objectFit="contain"
              src="/assets/bags.jpg"
            />
            <Text color="#646464" fontSize="12px" fontWeight={500}>
              {data?.data?.boot_capacity} Bags
            </Text>
          </Flex>

          <Flex align="center" mb="15px" gap="8px">
            <Image
              h="13px"
              w="13px"
              objectFit="contain"
              src="/assets/automatic.jpg"
            />
            <Text
              color="#646464"
              textTransform="capitalize"
              fontSize="12px"
              fontWeight={500}
            >
              {data?.data?.transmission}
            </Text>
          </Flex>

          <Flex align="center" mb="15px" gap="8px">
            <Image
              h="13px"
              w="13px"
              objectFit="contain"
              src="/assets/seater.jpg"
            />
            <Text
              color="#646464"
              textTransform="capitalize"
              fontSize="12px"
              fontWeight={500}
            >
              {data?.data?.doors} Doors
            </Text>
          </Flex>
        </Grid>
      </Flex>
    </Box>
  );
};

export default TripDetails;
