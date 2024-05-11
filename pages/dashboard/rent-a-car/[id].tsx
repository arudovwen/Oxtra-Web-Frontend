import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { FaRegDotCircle } from "react-icons/fa";
import { carFeatures } from "@/components/constants/arrays";
import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";

const RentDetails = () => {
  const parClasses = classNames("flex items-center justify-between");

  const dataClasses = classNames(
    "text-[#242424] text-[14px] font-gordita-bold"
  );

  return (
    <Box>
      <Flex align="center" justifyContent="space-between">
        {[
          "Request Accepted",
          "Driver Assigned",
          "Vehicle Taken",
          "Vehicle Returned",
        ].map((item: any, i: any) => (
          <Flex opacity={i > 0 ? 0.2 : 1} key={i} align="center" gap="8px">
            <FaRegDotCircle color="#0A3421" size="16px" />
            <Text fontSize="12px" fontWeight={500}>
              {item}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Box mt="24px">
        <Flex
          align="flex-start"
          flexDir={{ base: "column-reverse", md: "row" }}
          gap="24px"
        >
          <Box
            border="1px solid #E4E4E4"
            borderRadius="12px"
            px="24px"
            w={{ base: "100%", md: "70%" }}
            py="20px"
          >
            <Flex
              align="center"
              fontSize="14px"
              fontWeight={700}
              color="#242424"
              gap="8px"
            >
              <Text>Vehicle</Text>
              <Text>Honda CR-V (2015)</Text>
            </Flex>

            <Flex mt="12px" align="center" w="full" gap="16px">
              <Box w={{ base: "100%", md: "80%" }}>
                <Image
                  src="/assets/car.jpg"
                  w="182px"
                  h="144px"
                  objectFit="contain"
                />
              </Box>

              <Grid templateColumns="repeat(2,1fr)" w="full">
                {carFeatures.map((item: any, i: any) => (
                  <Flex align="center" mb="15px" gap="8px" key={i}>
                    <Image
                      h="13px"
                      w="13px"
                      objectFit="contain"
                      src={item.img}
                    />
                    <Text fontSize="12px" color="#646464" fontWeight={500}>
                      {item.name}
                    </Text>
                  </Flex>
                ))}
              </Grid>
            </Flex>
          </Box>

          <Box
            border="1px solid #E4E4E4"
            borderRadius="12px"
            px="24px"
            w={{ base: "100%", md: "30%" }}
            py="20px"
          >
            <Text color="#242424" fontSize="14px" fontWeight={700}>
              Driver
            </Text>

            <Flex
              bg="#0A3421"
              mt="12px"
              flexDir="column"
              gap="2px"
              borderRadius="12px"
              p="16px"
            >
              <Image
                src="/assets/profile.jpg"
                w="72px"
                h="72px"
                rounded="full"
                objectFit="contain"
              />

              <Text color="#fff" fontWeight={700}>
                Samuel Umoru
              </Text>
              <Text fontSize="10px" color="#E9F6EC" fontWeight={500}>
                090 1728 1828
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box
        mt="24px"
        border="1px solid #E4E4E4"
        borderRadius="12px"
        px="24px"
        w="full"
        py="20px"
      >
        <Text color="#242424" fontSize="14px" fontWeight={700}>
          Pick up and Return
        </Text>

        <Flex mt="16px" align="center" gap="24px">
          <Flex w="full" flexDir="column" fontSize="14px" gap="16px">
            <Text color="#444444" fontWeight={500}>
              Pick-up
            </Text>
            <Text color="#646668" fontSize="16px">
              3 Folake Kamoru Street, Lekki
            </Text>
            <Text color="#444648" fontSize="12px" fontWeight={500}>
              Sat, 17 Feb · 10:00
            </Text>
          </Flex>

          <Flex w="full" fontSize="14px" flexDir="column" gap="16px">
            <Text color="#444648" fontWeight={700}>
              Return
            </Text>
            <Text fontSize="16px" color="#646668">
              MM1 Airport
            </Text>
            <Text color="#444648" fontSize="12px" fontWeight={500}>
              Tue, 20 Feb · 10:00
            </Text>
          </Flex>
        </Flex>

        <Text
          cursor="pointer"
          textAlign="end"
          mt="16px"
          color="#214528"
          fontWeight={500}
          fontSize="12px"
          _hover={{ textDecor: "underline" }}
          textUnderlineOffset={3}
        >
          Change?
        </Text>
      </Box>

      <Flex
        mt="24px"
        align="center"
        flexDir={{ base: "column", md: "row" }}
        gap="24px"
      >
        <Box
          border="1px solid #E4E4E4"
          w="full"
          borderRadius="12px"
          py="20px"
          px="24px"
        >
          <Text fontWeight={700} color="#242424">
            Price Breakdown
          </Text>

          <Flex flexDir="column" gap="14px" mt="24px">
            <Box className={parClasses}>
              <Text color="#646464" fontSize="12px">
                Vehicle price per day
              </Text>
              <Text className={dataClasses}>₦12,000</Text>
            </Box>

            <Box className={parClasses}>
              <Text color="#646464" fontSize="12px">
                No. of days
              </Text>
              <Text className={dataClasses}>3</Text>
            </Box>

            <Box className={parClasses}>
              <Text color="#646464" fontSize="12px">
                Driver Service
              </Text>
              <Text className={dataClasses}>₦5,000</Text>
            </Box>

            <Box h="1px" w="full" bg="#E4E4E4"></Box>

            <Box className={parClasses}>
              <Text color="#646464">Total</Text>
              <Text className={dataClasses} fontSize="16px">
                {" "}
                ₦41,000
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box border="1px solid #E4E4E4" w="full" borderRadius="12px" p="24px">
          <Flex align="center" justifyContent="space-between">
            <Text fontWeight={700} color="#242424">
              Status
            </Text>

            <Flex align="center" gap="8px">
              <FaRegDotCircle color="#0A3421" size="16px" />
              <Text fontSize="14px" color="#444444" fontWeight={500}>
                Driver Assigned
              </Text>
            </Flex>
          </Flex>

          <Flex
            my="24px"
            h="57px"
            bg="#f4f4f4"
            borderRadius="8px"
            p="16px"
            justifyContent="space-between"
            align="center"
          >
            <Text color="#646668" fontWeight={500} fontSize="14px">
              Make a report
            </Text>
            <IoIosArrowForward size="16px" color="#101828" />
          </Flex>

          <Flex
            opacity={0.2}
            bg="#f4f4f4"
            h="57px"
            borderRadius="8px"
            p="16px"
            justifyContent="space-between"
            align="center"
          >
            <Text color="#646668" fontWeight={500} fontSize="14px">
              Review/Rating
            </Text>
            <IoIosArrowForward size="16px" color="#101828" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default RentDetails;
