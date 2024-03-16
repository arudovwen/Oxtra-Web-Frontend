import React, { useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";

const index = () => {
  const [tab, setTab] = useState("Active");
  const router = useRouter();
  return (
    <Flex
      border="1px solid #E4E4E4"
      borderRadius="16px"
      minH="42rem"
      w="100%"
      p="24px"
      flexDir="column"
    >
      <Box flex="1">
        <Flex justifyContent="center" align="center" w="full">
          <Flex
            justifyContent="center"
            align="center"
            w={{ base: "100%", md: "50%" }}
            p="8px"
            borderRadius="16px"
            border="1px solid #DDEEE0"
            gap="8px"
          >
            {["Active", "Completed", "Pending"].map((item: any, i: any) => (
              <Flex
                borderRadius="12px"
                py="14px"
                px="24px"
                w="full"
                justifyContent="center"
                align="center"
                cursor="pointer"
                color="#444444"
                bg={tab === item ? "#DDEEE0" : "transparent"}
                fontWeight={500}
                fontSize="12px"
                transition=".3s ease-in-out"
                _hover={{ color: "#0A3421" }}
                onClick={() => setTab(item)}
              >
                {item}
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Box mt="16px">
          {Array(2)
            .fill(null)
            .map((item, index) => (
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
                    <Text color="#444444" fontWeight={500} fontSize="14px">
                      Active
                    </Text>
                  </Flex>

                  <Flex
                    cursor="pointer"
                    color="#0A3421"
                    _hover={{ textDecor: "underline" }}
                    textUnderlineOffset={3}
                    onClick={() =>
                      router.push(`/dashboard/rent-a-car/${index}`)
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

                    <Flex
                      align="center"
                      gap="24px"
                      flexDir={{ base: "column", md: "row" }}
                    >
                      <Flex
                        flexDir="column"
                        w="full"
                        fontSize="12px"
                        gap="16px"
                      >
                        <Text color="#444444" fontWeight={700}>
                          Pick-up
                        </Text>
                        <Text color="#0A3421" fontWeight={500}>
                          Sat, 17 Feb · 10:00
                        </Text>
                        <Text color="#646668" fontSize="14px">
                          3 Folake Kamoru Street, Lekki
                        </Text>
                      </Flex>

                      <Flex
                        fontSize="12px"
                        w="full"
                        flexDir="column"
                        gap="16px"
                      >
                        <Text color="#444648" fontWeight={700}>
                          Return
                        </Text>
                        <Text color="#0A3421" fontWeight={500}>
                          Tue, 20 Feb · 10:00
                        </Text>
                        <Text fontSize="14px" color="#646668">
                          MM1 Airport
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>

      <Button
        w="full"
        bg="#438950"
        _hover={{ bg: "#438950" }}
        _active={{ bg: "#438950" }}
        _focus={{ bg: "#438950" }}
        borderRadius="8px"
        h="48px"
        color="#fff"
        fontSize="12px"
        fontWeight={500}
      >
        Rent a Car
      </Button>
    </Flex>
  );
};

export default index;
