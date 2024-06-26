import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Header from "./AuthLayout/Header";
import SideBar from "./AuthLayout/SideBar";
import { useRouter } from "next/router";
import { carOwnerRoutes, sideBarRoutes } from "@/components/constants/arrays";
import { useGetUser } from "@/services/query/auth";
import { useEffect, useState } from "react";

const AuthLayout = ({ children }: any) => {
  const [isMobile] = useMediaQuery("(max-width: 991px)");
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
  const { data: userData, isLoading } = useGetUser(user?.user?.id);

  const isSideBarRouteActive = () => {
    return (
      userData?.data?.user_type === 0 ? sideBarRoutes : carOwnerRoutes
    ).some((route) => router.pathname === route.route);
  };

  return (
    <Flex minH="100vh" pb="50px" pos="relative" w="full" flexDir="column">
      <Box pos="sticky" top="0" zIndex={10} bg="#fff">
        <Header />
      </Box>

      <Flex w="full" mt="40px" justifyContent="center" align="center">
        <Flex align="flex-start" pos="relative" w="1192px" gap="36px">
          <Box
            display={
              isMobile
                ? "none"
                : isLoading ||
                    router.pathname === "/client/vehicles/[id]" ||
                    router.pathname === "/customer/rent-a-car/requests/[id]"
                  ? "block"
                  : !isSideBarRouteActive()
                    ? "none"
                    : "block"
            }
            w="30%"
            pos="sticky"
            top="135px"
          >
            <SideBar />
          </Box>
          <Box
            w={
              isMobile
                ? "100%"
                : router.pathname === "/client/vehicles/[id]" ||
                    router.pathname === "/customer/rent-a-car/requests/[id]"
                  ? "70%"
                  : !isSideBarRouteActive()
                    ? "100%"
                    : "70%"
            }
            px={
              isMobile
                ? "20px"
                : router.pathname === "/client/vehicles/[id]" ||
                    router.pathname === "/customer/rent-a-car/requests/[id]"
                  ? "20px"
                  : !isSideBarRouteActive()
                    ? "0"
                    : "20px"
            }
          >
            {children}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
