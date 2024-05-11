import { sideBarRoutes } from "@/components/constants/arrays";
import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const SideBar = () => {
  const router = useRouter();
  const [logginOut, setLogginOut] = useState(false);

  const action = () => {
    setLogginOut(true);
    setTimeout(() => {
      setLogginOut(false);
      router.push("/login");
      localStorage.removeItem("user");
    }, 2000);
  };

  return (
    <Box>
      <Flex
        flexDir="column"
        border="1px solid #E4E4E4"
        borderRadius="16px"
        h="42rem"
        py="24px"
        px="20px"
      >
        <Box>
          <Flex bg="#0A3421" gap="16px" borderRadius="12px" p="16px">
            <Image
              src="/assets/profile.jpg"
              w="72px"
              h="72px"
              rounded="full"
              objectFit="contain"
            />

            <Flex color="#E9F6EC" flexDir="column" gap="12px">
              <Text color="#fff" fontWeight={700}>
                Samuel Umoru
              </Text>
              <Text fontSize="10px" fontWeight={500}>
                Sammyfish007@gmail.com
              </Text>
              <Text fontSize="12px" fontWeight={500} textDecor="underline">
                View Profile
              </Text>
            </Flex>
          </Flex>

          <Flex flexDir="column" gap="16px" mt="24px">
            {sideBarRoutes.map((item: any, i: any) => (
              <Flex
                key={i}
                align="center"
                gap="12px"
                onClick={() => router.push(`/dashboard/${item.route}`)}
                cursor="pointer"
                _hover={{ border: "1px solid #0A3421", color: "#0A3421" }}
                transition=".3s ease-in-out"
                bg={router.pathname.includes(item.route) ? "#DDEEE0" : "unset"}
                color={
                  router.pathname.includes(item.route) ? "##102214" : "#666666"
                }
                py="10px"
                px="12px"
                borderRadius="6px"
                border="1px solid #E4E4E4"
              >
                <Image src={item?.img} w="20px" h="20px" objectFit="contain" />
                <Text fontSize="14px" fontWeight={500}>
                  {item?.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>

        <Flex
          mt="auto"
          align="center"
          gap="12px"
          onClick={action}
          cursor="pointer"
          _hover={{ border: "1px solid #9A2121", color: "#9A2121" }}
          transition=".3s ease-in-out"
          color="#9A2121"
          py="10px"
          px="12px"
          borderRadius="6px"
          border="1px solid #E4E4E4"
        >
          {logginOut ? (
            <Spinner />
          ) : (
            <Image
              src="/assets/logout.svg"
              w="20px"
              h="20px"
              objectFit="contain"
            />
          )}
          <Text fontSize="14px" fontWeight={500}>
            {logginOut ? "Logging Out" : "Logout"}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SideBar;
