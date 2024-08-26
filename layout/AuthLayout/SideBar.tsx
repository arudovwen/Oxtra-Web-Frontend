import { carOwnerRoutes, sideBarRoutes } from "@/components/constants/arrays";
import { useGetUser } from "@/services/query/auth";
import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SideBar = () => {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser =
        // @ts-ignore
        JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    }
  }, []);

  // @ts-ignore
  const { data: userData } = useGetUser(user?.user?.id);

  const [logginOut, setLogginOut] = useState(false);

  const action = () => {
    setLogginOut(true);
    setTimeout(() => {
      setLogginOut(false);
      router.push("/login");
      localStorage.clear();
      sessionStorage.clear();
    }, 2000);
  };

  const isRouteActive = (route: any, pathname: any) => {
    const cleanRoute = route.replace(/\[.*?\]/g, ""); // remove [id] parts
    return pathname.startsWith(cleanRoute);
  };

  return (
    <Box w="full">
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
                {userData?.data?.firstName || ""}{" "}
                {userData?.data?.lastName || ""}
              </Text>
              <Text fontSize="10px" fontWeight={500}>
                {userData?.data?.email}
              </Text>
              <Text fontSize="12px" fontWeight={500} textDecor="underline">
                View Profile
              </Text>
            </Flex>
          </Flex>

          <Flex flexDir="column" gap="16px" mt="24px">
            {(userData?.data?.user_type === 0
              ? sideBarRoutes
              : carOwnerRoutes
            ).map((item: any, i: any) => (
              <Flex
                key={i}
                align="center"
                gap="12px"
                onClick={() => router.push(`/${item.route}`)}
                cursor="pointer"
                _hover={{ border: "1px solid #0A3421", color: "#0A3421" }}
                transition=".3s ease-in-out"
                bg={
                  isRouteActive(item.route, router.pathname)
                    ? "#DDEEE0"
                    : "unset"
                }
                color={
                  isRouteActive(item.route, router.pathname)
                    ? "#102214"
                    : "#666666"
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
