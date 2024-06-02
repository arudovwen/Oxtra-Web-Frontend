import React from "react";
import Navigation from "../../../layout/NonAuthLayout/Navigation";
import Container from "../../../layout/NonAuthLayout/Container";
import AlterFooter from "../../../layout/NonAuthLayout/Footers/AlterFooter";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";

interface PutUpYourVehicleLayoutProps {
  children: React.ReactNode;
  putYourVehicleLayoutActivePage: string;
}

const nav = [
  {
    name: "Basic information",
  },
  {
    name: "Vehicle",
  },
  {
    name: "Documents",
  },
];

const PutUpYourVehicleLayout = ({
  children,
  putYourVehicleLayoutActivePage,
}: PutUpYourVehicleLayoutProps) => {
  const activePage = "Sign up as a car owner";

  const router = useRouter();

  const parts = router.pathname.split("/");

  // Get the part after the second slash
  const partAfterSecondSlash = parts.length >= 3 ? parts[2] : null;

  return (
    <Box pb="50px">
      <Container>
        {router.pathname === "/register-car" ? (
          <div className="mt-[70px]"> {children}</div>
        ) : (
          <Box mt="56px">
            <Flex
              gap="5px"
              align="center"
              color="#444648"
              fontSize="14px"
              fontWeight={500}
              cursor="pointer"
              onClick={() => router.back()}
            >
              <IoArrowBack size="24px" />
              <Text>Back</Text>
            </Flex>

            <Flex flexDir="column" justifyContent="center" align="center">
              <Flex
                flexDir="column"
                w={{ base: "100%", md: "45%" }}
                justifyContent="center"
                align="flex-start"
              >
                <Flex
                  mt={{ base: "10px", md: "-28px" }}
                  justifyContent="space-between"
                  w="full"
                  gap={{ base: "15px", md: "unset" }}
                  flexDir={{ base: "column", md: "row" }}
                >
                  {["Vehicle Information", "Images", "Documents"].map(
                    (item: any, i: any) => (
                      <Flex
                        key={i}
                        w={{ base: "50%", md: "unset" }}
                        align="center"
                        gap="12px"
                      >
                        <Flex
                          justifyContent="center"
                          align="center"
                          bg={
                            item.toLowerCase().includes(partAfterSecondSlash)
                              ? "#438950"
                              : "#B3B3B3"
                          }
                          color="#fff"
                          w="30px"
                          h="30px"
                          fontSize="12px"
                          fontWeight={500}
                          rounded="full"
                          pt="2px"
                        >
                          {i + 1}
                        </Flex>
                        <Text
                          fontSize="14px"
                          fontWeight={
                            item.toLowerCase().includes(partAfterSecondSlash)
                              ? 500
                              : 400
                          }
                          color={
                            item.toLowerCase().includes(partAfterSecondSlash)
                              ? "#438950"
                              : "#666666"
                          }
                        >
                          {item}
                        </Text>
                      </Flex>
                    )
                  )}
                </Flex>

                <Box mt="70px" w="full">
                  {" "}
                  {children}
                </Box>
              </Flex>
            </Flex>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default PutUpYourVehicleLayout;
