import { Box, Flex } from "@chakra-ui/react";
import Header from "./AuthLayout/Header";
import SideBar from "./AuthLayout/SideBar";

const AuthLayout = ({ children }: any) => {
  return (
    <Flex minH="100vh" pos="relative" w="full" flexDir="column">
      <Box pos="sticky" top="0" zIndex={10} bg="#fff">
        <Header />
      </Box>

      <Flex w="full" mt="40px" justifyContent="center" align="center">
        <Flex align="flex-start" pos="relative" w="1192px" gap="36px">
          <Box w="30%" pos="sticky" top="135px">
            <SideBar />
          </Box>
          <Box
            flexDir="column"
            border="1px solid #E4E4E4"
            borderRadius="16px"
            h="42rem"
            w="70%"
            p="24px"
          >
            {children}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
