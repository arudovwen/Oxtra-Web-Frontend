import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Breakdown = ({
  dataClasses,
  values,
  data,
  setValues,
  calculateDayDifference,
  parClasses,
}: any) => {
  const router = useRouter();
  return (
    <Flex
      flexDir="column"
      fontFamily="gordita"
      w={{ base: "full", md: "48%" }}
      h={{ base: "unset", md: "37.5rem" }}
    >
      <Box>
        <Box mb={2}>
          <Text mb="8px" color="#444648" fontSize="14px" fontWeight={500}>
            Area where you plan to use the rental{" "}
            <span className="text-red-500">*</span>
          </Text>

          <Input
            h="48px"
            border="1px solid #c4c6c8"
            bg="transparent"
            p="16px"
            borderRadius="3px"
            value={values?.area_of_usage}
            onChange={(e) =>
              setValues({ ...values, area_of_usage: e.target.value })
            }
            fontSize="14px"
            color="#646668"
            required
          />
        </Box>

        <Text mt="8px" color="#0A3421" fontWeight={500} fontSize="12px">
          Please note that outskirt locations attract extra charges on the
          booking.
        </Text>
        <Box mt={6}>
          <Text mb="8px" color="#444648" fontSize="12px" fontWeight={700}>
            Add note to driver
          </Text>

          <Textarea
            h="75px"
            border="1px solid #c4c6c8"
            bg="transparent"
            p="16px"
            value={values?.notes}
            onChange={(e) => setValues({ ...values, notes: e.target.value })}
            borderRadius="8px"
            fontSize="14px"
            color="#646668"
            placeholder="Enter any special requests for the order"
          />
        </Box>
      </Box>

      <Box mt="20px" border="1px solid #e4e4e4" borderRadius="12px" p="24px">
        <Text color="#242424" fontWeight={700}>
          Price Breakdown
        </Text>

        <Flex
          flexDir="column"
          gap={{ base: "24px", md: "18px" }}
          mt={{ base: "24px", md: "18px" }}
        >
          <Box className={parClasses}>
            <Text color="#646464">Vehicle price per day</Text>
            <Text className={dataClasses}>
              ₦{Number(data?.data?.price_per_day)?.toLocaleString()}
            </Text>
          </Box>

          <Box className={parClasses}>
            <Text color="#646464">No. of days</Text>
            <Text className={dataClasses}>
              {calculateDayDifference(
                values?.rent_values?.pickUp,
                values?.rent_values?.dropOff
              )}
            </Text>
          </Box>

          <Box h="1px" w="full" bg="#e4e4e4" />

          <Box className={parClasses}>
            <Text color="#646464">Total</Text>
            <Text className={dataClasses}>
              {" "}
              ₦
              {Number(
                Number(data?.data?.price_per_day) *
                  calculateDayDifference(
                    values?.rent_values?.pickUp,
                    values?.rent_values?.dropOff
                  )
              )?.toLocaleString()}
            </Text>
          </Box>
        </Flex>
      </Box>

      <Flex mt="24px" cursor="pointer" align="center" gap="8px">
        <Image
          cursor="pointer"
          src="/share.svg"
          w="24px"
          h="24px"
          objectFit="contain"
        />

        <Text color="#646464" fontWeight={500} fontSize="12px">
          Share vehicle and booking
        </Text>
      </Flex>
      <Button
        onClick={() => {
          localStorage.setItem("checkout", "checkout");
          sessionStorage.setItem("rent-values", JSON.stringify(values));
          router.push("/signup/0");
        }}
        _hover={{ opacity: 0.8 }}
        mt={{ base: "22px", md: "auto" }}
        color="#fff"
        w="full"
        h="48px"
        bg="#42864F"
        borderRadius="8px"
          className="disabled:opacity-50 cursor-not-allowed"
          isDisabled={!values?.area_of_usage}
      >
        Submit
      </Button>
    </Flex>
  );
};

export default Breakdown;
