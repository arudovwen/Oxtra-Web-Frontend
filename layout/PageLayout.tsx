import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Header from "./AuthLayout/Header";
import SideBar from "./AuthLayout/SideBar";

const AuthLayout = ({ children }: any) => {
  const [isMobile] = useMediaQuery("(max-width: 991px)");
  return (
    <Flex minH="100vh" pb="50px" pos="relative" w="full" flexDir="column">
      <Box pos="sticky" top="0" zIndex={10} bg="#fff">
        <Header />
      </Box>

      <Flex w="full" mt="40px" justifyContent="center" align="center">
        <Flex align="flex-start" pos="relative" w="1192px" gap="36px">
          <Box
            display={isMobile ? "none" : "block"}
            w="30%"
            pos="sticky"
            top="135px"
          >
            <SideBar />
          </Box>
          <Box w={isMobile ? "100%" : "70%"} px="20px">
            {children}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
