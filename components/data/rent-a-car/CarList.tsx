import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";

const CarList = ({ data, isLoading }: any) => {
  const router = useRouter();
  return (
    <Grid
      gap="32px"
      mt="24px"
      templateColumns={{
        base: "repeat(1,1fr)",
        md: isLoading ? "repeat(1,1fr)" : "repeat(3,1fr)",
      }}
    >
      {isLoading ? (
        <Grid
          gap="32px"
          mt="24px"
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
        >
          <Skeleton h="27.5rem" w="100%" borderRadius="6px" />
          <Skeleton h="27.5rem" w="100%" borderRadius="6px" />
          <Skeleton h="27.5rem" w="100%" borderRadius="6px" />
        </Grid>
      ) : (
        data?.data?.map((item: any, index: any) => (
          <GridItem
            className="pare"
            border="1px solid #E4E4E4"
            borderRadius="6px"
            py="24px"
            fontFamily="Gordita"
            px="16px"
            overflowX="hidden"
            key={index}
          >
            <Flex align="flex-end" justifyContent="space-between" w="full">
              <Box>
                <Text
                  fontWeight={700}
                  textTransform="capitalize"
                  fontSize="20px"
                  color="#242424"
                >
                  {item?.brand} {item?.model} {`(${item?.year})`}
                </Text>
                <Text mt="12px" fontSize="12px" color="#646464">
                  or any similar SUV
                </Text>
              </Box>
              <Image cursor="pointer" src="/share.svg" w="20px" h="20px" objectFit="contain" />
            </Flex>

            <Box>
              <Image
                src="../assets/car.jpg"
                my="16px"
                w="full"
                className="car"
              />
            </Box>
            <Flex align="center" justifyContent="space-between">
              <Flex
                display={
                  JSON.parse(item?.extras)?.find(
                    (item: any) => item === "AC"
                  ) === "AC"
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
                <Text mt="8px" fontSize="12px" color="#646464" fontWeight={500}>
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
                <Text mt="8px" fontSize="12px" color="#646464" fontWeight={500}>
                  {item?.no_of_seats} Seater
                </Text>
              </Flex>

              <Flex flexDir="column" justifyContent="center" align="center">
                <Image
                  h="13px"
                  objectFit="contain"
                  w="13px"
                  src="../assets/bags.jpg"
                />
                <Text mt="8px" fontSize="12px" color="#646464" fontWeight={500}>
                  {item?.boot_capacity} Bags
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
                  {item?.transmission}
                </Text>
              </Flex>
            </Flex>

            <Flex
              align="center"
              justifyContent="space-between"
              mt="24px"
              className="mt-[24px] flex justify-between items-center"
            >
              <Box color="#242424" w="full">
                <Text fontWeight={700} fontSize="20px">
                  ₦15,000 / day
                </Text>
                <Text mt="16px" fontWeight={500} fontSize="14px">
                  ₦45,000 Total
                </Text>
              </Box>

              <Box className="par">
                <Flex
                  align="center"
                  justifyContent="center"
                  bg="#214528"
                  cursor="pointer"
                  color="#fff"
                  h="40px"
                  w="40px"
                  rounded="full"
                  onClick={() =>
                    router.push(
                      `/rent-a-car/${item?.brand} ${item?.model}/booking`
                    )
                  }
                >
                  <HiArrowLongRight className="arrow" />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
        ))
      )}
    </Grid>
  );
};

export default CarList;
