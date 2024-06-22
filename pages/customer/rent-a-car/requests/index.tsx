import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Body from "@/components/data/customer/rent-a-car/requests/Body";
import { useGetUsersRent } from "@/services/query/rent";

const requests = () => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    page: 1,
    limit: 25,
    status: "active",
  });

  const { data, isLoading, refetch } = useGetUsersRent(filters, {
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Flex
      border="1px solid #E4E4E4"
      borderRadius="16px"
      minH="42rem"
      w="100%"
      p="24px"
      pt="0"
      flexDir="column"
    >
      <Box flex="1">
        <Flex
          bg="#fff"
          pos="sticky"
          top="0"
          pt="24px"
          zIndex={2}
          justifyContent="center"
          align="center"
          w="full"
        >
          <Flex
            justifyContent="center"
            align="center"
            w={{ base: "100%", md: "50%" }}
            p="8px"
            borderRadius="16px"
            border="1px solid #DDEEE0"
            gap="8px"
          >
            {["active", "completed", "pending"].map((item: any, i: any) => (
              <Flex
                borderRadius="12px"
                py="14px"
                px="24px"
                w="full"
                justifyContent="center"
                align="center"
                cursor="pointer"
                color="#444444"
                bg={filters?.status === item ? "#DDEEE0" : "transparent"}
                fontWeight={500}
                fontSize="12px"
                textTransform="capitalize"
                transition=".3s ease-in-out"
                _hover={{ color: "#0A3421" }}
                // @ts-ignore
                onClick={() => setFilters({ ...filters, status: item })}
              >
                {item?.toLowerCase()}
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          maxH={isLoading ? "unset" : "52vh"}
          overflowY={{
            base: isLoading || !data?.data?.length ? "hidden" : "scroll",
            md:
              isLoading || !data?.data?.length || data?.data?.length < 3
                ? "hidden"
                : "scroll",
          }}
          dir={!data?.data?.length ? "ltr" : "rtl"}
          className="rent_scroll"
          mt="16px"
          pl="10px"
        >
          {!isLoading && !data?.data?.length ? (
            <Flex
              flexDir="column"
              align="center"
              justifyContent="center"
              h="52vh"
            >
              <Image src="/no-car.svg" w="113px" h="85px" objectFit="contain" />
              <Text
                mt="24px"
                mb="12px"
                color="#214528"
                fontSize="20px"
                fontWeight={500}
                lineHeight="20px"
                textAlign="center"
              >
                No Rentals Yet
              </Text>
              <Text
                color="#646464"
                textAlign="center"
                fontSize="14px"
                lineHeight="14px"
              >
                All rental requests will be shown here
              </Text>
              <Button
                w="200px"
                mt="24px"
                bg="#438950"
                _hover={{ bg: "#438950" }}
                _active={{ bg: "#438950" }}
                _focus={{ bg: "#438950" }}
                onClick={() => router.push("/customer/rent-a-car")}
                borderRadius="8px"
                h="48px"
                color="#fff"
                fontSize="12px"
                fontWeight={500}
              >
                Rent a Car
              </Button>
            </Flex>
          ) : (
            <Box dir="ltr">
              <Body data={data} isLoading={isLoading} />
            </Box>
          )}
        </Flex>
      </Box>

      <Box pt="30px" bg="#fff" borderTopRadius="16px">
        <Button
          w="full"
          bg="#438950"
          display={!data?.data?.length ? "none" : "block"}
          _hover={{ bg: "#438950" }}
          _active={{ bg: "#438950" }}
          _focus={{ bg: "#438950" }}
          onClick={() => router.push("/customer/rent-a-car")}
          borderRadius="8px"
          h="48px"
          color="#fff"
          fontSize="12px"
          fontWeight={500}
        >
          Rent a Car
        </Button>
      </Box>
    </Flex>
  );
};

export default requests;
