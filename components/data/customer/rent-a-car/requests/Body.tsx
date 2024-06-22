import React from "react";
import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { formatDat } from "@/helpers/helpers";

const Body = ({ data, isLoading }: any) => {
  const router = useRouter();
  return (
    <div>
      <Flex display={isLoading ? "flex" : "none"} flexDir="column" gap="16px">
        <Skeleton w="full" h="10rem" borderRadius="12px" />
        <Skeleton w="full" h="10rem" borderRadius="12px" />
      </Flex>
      {data?.data?.map((item: any, index: any) => (
        <Box
          mb="16px"
          key={index}
          border="1px solid #E4E4E4"
          borderRadius="12px"
          p="20px"
        >
          <Flex align="center" justifyContent="space-between" w="full">
            <Flex
              borderRadius="12px"
              py="8px"
              px="12px"
              cursor="pointer"
              fontSize="14px"
              color="#444444"
              align="center"
              gap="12px"
              bg="#DDEEE0"
              fontWeight={500}
            >
              <FaRegDotCircle color="#0A3421" size="16px" />
              <Text
                textTransform="capitalize"
                color="#444444"
                fontWeight={500}
                fontSize="14px"
              >
                {item?.status}
              </Text>
            </Flex>

            <Flex
              cursor="pointer"
              color="#0A3421"
              _hover={{ textDecor: "underline" }}
              textUnderlineOffset={3}
              onClick={() =>
                router.push(`/customer/rent-a-car/requests/${item?.id}`)
              }
              gap="10px"
              align="center"
            >
              <Text fontSize="12px" fontWeight={500}>
                View Details
              </Text>
              <IoIosArrowForward size="16px" />
            </Flex>
          </Flex>

          <Box mt="16px">
            <Flex
              align={{ base: "flex-start", md: "center" }}
              flexDir={{ base: "column", md: "row" }}
              gap="16px"
            >
              <Flex
                justifyContent="center"
                align="center"
                w={{ base: "full", md: "unset" }}
              >
                <Image
                  src="/assets/car.jpg"
                  w={{ base: "182px", md: "92px" }}
                  h={{ base: "144px", md: "74px" }}
                  objectFit="contain"
                />
              </Flex>

              <Flex flexDir="column" gap="16px">
                <Text
                  color="#444444"
                  fontWeight={700}
                  fontSize="12px"
                  lineHeight="12px"
                >
                  Pick-up
                </Text>
                <Text
                  color="#0A3421"
                  fontWeight={500}
                  fontSize="12px"
                  lineHeight="12px"
                >
                  {formatDat(item?.pickup_date)} · {item?.pickup_time}
                </Text>
                <Text color="#646668" fontSize="14px" lineHeight="14px">
                  {item?.pickup_location}
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default Body;
