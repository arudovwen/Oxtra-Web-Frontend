import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <Flex justifyContent="center" align="center" w="full">
      <Flex w="full" px="20px" py="24px" justifyContent="center" align="center">
        <Flex align="center" w="1192px" justifyContent="space-between">
          <Box>
            <Image
              src="/assets/oxtra logo-8.png"
              alt="logo"
              width="142px"
              height="40px"
              objectFit="contain"
            />
          </Box>

          <Flex align="center" gap="40px">
            <Text
              cursor="pointer"
              onClick={() => router.push("/customer/rent-a-car/requests")}
              fontWeight={500}
              color="#444648"
            >
              Dashboard
            </Text>
            <Image
              src="/assets/notification.jpg"
              w="24px"
              h="24px"
              objectFit="contain"
            />
            <Image
              src="/assets/pfp.jpg"
              w="32px"
              h="32px"
              objectFit="contain"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
