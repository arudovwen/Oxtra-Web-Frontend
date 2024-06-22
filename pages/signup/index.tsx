import React, { useState } from "react";
import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const index = () => {
  const [userType, setUserType] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRoute = (i: any) => {
    setIsLoading(true);
    setUserType(i);
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/signup/${i}`);
    }, 2000);
  };

  return (
    <Flex
      flexDir="column"
      minH="50vh"
      justifyContent="center"
      align="center"
      px="10px"
      w="100%"
      fontFamily="gordita"
    >
      <Flex mt="30px" justifyContent="center" w="100%" align="center">
        <Box
          border="1px solid #EAEAEA"
          w="30rem"
          borderRadius="10px"
          py="28px"
          px="20px"
        >
          <Text color="#0A3421" fontSize="24px" fontWeight={700}>
            Welcome to Oxtra
          </Text>
          <Text my="24px" color="#343638" fontWeight={500}>
            What do you want to do?
          </Text>

          <Flex align="center" gap="24px">
            {["Rent a car", "Put up my car"].map((item, i) => (
              <Flex w="100%" h={isLoading ? "15vh" : ""}>
                <Flex
                  flexDir="column"
                  justifyContent={
                    isLoading && userType === i ? "center" : "flex-start"
                  }
                  align={isLoading && userType === i ? "center" : "flex-start"}
                  cursor={isLoading ? "" : "pointer"}
                  onClick={() => (isLoading ? "" : handleRoute(i))}
                  border={
                    userType === i ? "2px solid #438950" : "1px solid #EAEAEA"
                  }
                  bg={userType === i ? "#EEF7EF" : "transparent"}
                  p="24px"
                  w="100%"
                  borderRadius="8px"
                >
                  {userType === i && isLoading ? (
                    <Spinner color="#438950" size="lg" />
                  ) : (
                    ""
                  )}
                  <Box
                    display={isLoading && userType === i ? "none" : "block"}
                    opacity={isLoading ? (userType === i ? 1 : 0.5) : 1}
                  >
                    <Image
                      src={i === 0 ? "/customer.svg" : "/owner.svg"}
                      w="48px"
                      h="48px"
                      objectFit="contain"
                    />
                    <Text
                      mt="16px"
                      color={userType === i ? "#438950" : "#000"}
                      fontSize="20px"
                      fontWeight={500}
                    >
                      {item}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default index;
