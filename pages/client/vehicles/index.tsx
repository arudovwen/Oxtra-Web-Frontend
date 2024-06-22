import React, { useEffect } from "react";
import { Box, Button, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import { useGetOwnerVehicles } from "@/services/query/vehicle";
import { useRouter } from "next/router";
import Body from "@/components/data/client/vehicle/Body";

const vehicles = () => {
  const { data, isLoading, refetch } = useGetOwnerVehicles({
    refetchOnWindowFocus: true,
  });

  const router = useRouter();

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
      flexDir="column"
    >
      <Box flex="1">
        <Flex
          align="center"
          justifyContent="space-between"
          w="full"
          lineHeight="16px"
          fontWeight={700}
          color="#444"
        >
          <Text>Vehicles</Text>
          <Text>{data?.data?.length ? data?.data?.length : ""}</Text>
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
          mt="24px"
          pl="10px"
        >
          <Box dir="ltr">
            <Flex
              display={isLoading ? "flex" : "none"}
              flexDir="column"
              gap="16px"
            >
              <Skeleton w="full" h="10rem" borderRadius="12px" />
              <Skeleton w="full" h="10rem" borderRadius="12px" />
            </Flex>
            {data?.data?.length
              ? data?.data?.map((item: any, i: any) => (
                  <Box key={i}>
                    <Body item={item} />
                  </Box>
                ))
              : !isLoading &&
                !data?.data?.length && (
                  <Flex
                    flexDir="column"
                    align="center"
                    justifyContent="center"
                    h="52vh"
                  >
                    <Image
                      src="/no-car.svg"
                      w="113px"
                      h="85px"
                      objectFit="contain"
                    />
                    <Text
                      mt="24px"
                      mb="12px"
                      color="#214528"
                      fontSize="20px"
                      fontWeight={500}
                      lineHeight="20px"
                      textAlign="center"
                    >
                      No Vehicles Yet
                    </Text>
                    <Text
                      color="#646464"
                      textAlign="center"
                      fontSize="14px"
                      lineHeight="14px"
                    >
                      All uploaded vehicles will be shown here
                    </Text>
                    <Button
                      w="200px"
                      mt="24px"
                      bg="#438950"
                      _hover={{ bg: "#438950" }}
                      _active={{ bg: "#438950" }}
                      _focus={{ bg: "#438950" }}
                      onClick={() =>
                        router.push("/client/vehicles/create-step-1")
                      }
                      borderRadius="8px"
                      h="48px"
                      color="#fff"
                      fontSize="12px"
                      fontWeight={500}
                    >
                      Add a Vehicle
                    </Button>
                  </Flex>
                )}
          </Box>
        </Flex>
      </Box>

      <Flex
        justifyContent="center"
        w="full"
        pt="30px"
        bg="#fff"
        borderTopRadius="16px"
      >
        <Button
          w="280px"
          bg="#438950"
          display={!data?.data?.length ? "none" : "block"}
          _hover={{ bg: "#438950" }}
          _active={{ bg: "#438950" }}
          _focus={{ bg: "#438950" }}
          onClick={() => router.push("/client/vehicles/create-step-1")}
          borderRadius="8px"
          h="48px"
          color="#fff"
          fontSize="12px"
          fontWeight={500}
        >
          Add Another Vehicle
        </Button>
      </Flex>
    </Flex>
  );
};

export default vehicles;
