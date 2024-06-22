import { Box, Flex, Image, Switch, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Body = ({ item }: any) => {
  const router = useRouter();
  return (
    <Box mb="16px" border="1px solid #E4E4E4" borderRadius="12px" p="16px">
      <Flex align="center" gap="20px">
        <Box>
          <Image
            src="/assets/car.jpg"
            w={{ base: "182px", md: "210px" }}
            h={{ base: "144px", md: "122px" }}
            objectFit="contain"
          />
        </Box>

        <Box w="50%">
          <Flex
            align="center"
            fontSize="14px"
            fontWeight={700}
            color="#242424"
            gap="8px"
            textTransform="capitalize"
          >
            <Text>
              {item?.brand?.toLowerCase()} {item?.model?.toUpperCase()}{" "}
              {`(${item?.year})`}
            </Text>
          </Flex>

          <Flex
            mt="12px"
            align={{ base: "flex-start", md: "center" }}
            w={{ base: "full", md: "70%" }}
            gap="16px"
            flexDir={{ base: "column", md: "row" }}
          >
            <Flex flexWrap="wrap" gap="25px" rowGap="0">
              <Flex
                display={
                  item &&
                  JSON.parse(item?.extras)?.find(
                    (item: any) => item === "AC"
                  ) === "AC"
                    ? "flex"
                    : "none"
                }
                align="center"
                mb="15px"
                gap="8px"
              >
                <Image
                  h="13px"
                  w="13px"
                  objectFit="contain"
                  src="/assets/ac.jpg"
                />
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
                  {item?.no_of_seats} Seater
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
                  {item?.boot_capacity} Bags
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
                  {item?.transmission}
                </Text>
              </Flex>

              <Flex
                display={
                  item &&
                  JSON.parse(item?.extras)?.find(
                    (item: any) => item === "Bluetooth Radio"
                  ) === "Bluetooth Radio"
                    ? "flex"
                    : "none"
                }
                align="center"
                mb="15px"
                gap="8px"
              >
                <Image
                  h="13px"
                  w="13px"
                  objectFit="contain"
                  src="/assets/bluetooth.jpg"
                />
                <Text
                  color="#646464"
                  textTransform="capitalize"
                  fontSize="12px"
                  fontWeight={500}
                >
                  Bluetooth Radio
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
                  {item?.doors} Doors
                </Text>
              </Flex>

              <Flex
                align="center"
                display={
                  item &&
                  JSON.parse(item?.extras)?.find(
                    (item: any) => item === "Reverse Camera"
                  ) === "Reverse Camera"
                    ? "flex"
                    : "none"
                }
                mb="15px"
                gap="8px"
              >
                <Image
                  h="13px"
                  w="13px"
                  objectFit="contain"
                  src="/assets/seater.jpg"
                />
                <Text color="#646464" fontSize="12px" fontWeight={500}>
                  Reverse Camera
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <Box w="15%" fontSize="12px" lineHeight="12px">
          <Text color="#444" fontWeight={700}>
            Vehicle Status
          </Text>

          <Flex mt="8px" align="center" gap="15px" dir="rtl">
            <Switch size="sm" />
            <Text color="#646464">Available</Text>
          </Flex>

          <Flex
            mt="50px"
            color="#0A3421"
            align="center"
            onClick={() => router.push(`/client/vehicles/${item?.id}`)}
            gap="5px"
            cursor="pointer"
          >
            <Text fontWeight={500}>View Details</Text>
            <IoIosArrowForward size="15px" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Body;
