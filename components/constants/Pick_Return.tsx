import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { carAccessories } from "./arrays";

const Pick_Return = () => {
  return (
    <Flex flexDir="column" justifyContent="center" align="center" w="full">
      <Flex
        flexDir="column"
        justifyContent="center"
        align="center"
        w={{ base: "full", md: "1032px" }}
      >
        <Grid
          border="1px solid #E4E4E4"
          borderRadius="12px"
          py="16px"
          w="100%"
          px="24px"
          pr={{ base: "24px", md: "0" }}
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(7,1fr)" }}
          gap="24px"
        >
          <GridItem
            colSpan={{ base: 1, md: 2 }}
            display={"flex"}
            flexDir="column"
            gap="16px"
          >
            <Text color="#444444" fontSize="14px" fontWeight={500}>
              Pick-up
            </Text>
            <Text color="#646668">3 Folake Kamoru Street, Lekki</Text>
            <Text fontSize="12px" color="#444648" fontWeight={500}>
              Sat, 17 Feb · 10:00
            </Text>
          </GridItem>

          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Flex w="full" flexDir="column" gap="16px">
              <Text color="#444444" fontSize="14px" fontWeight={500}>
                Return
              </Text>
              <Text color="#646668">MM1 Airport</Text>
              <Text fontSize="12px" color="#444648" fontWeight={500}>
                Tue, 20 Feb · 10:00
              </Text>
            </Flex>
          </GridItem>

          <GridItem colSpan={{ base: 1, md: 3 }}>
            <Flex align="center" gap="16px">
              <Image
                src="../assets/car.jpg"
                w="100px"
                h="80px"
                objectFit="contain"
              />
              <Box>
                <Text fontSize="14px" fontWeight={500} mb="16px">
                  Honda CR-V (2015)
                </Text>

                <Flex align="center" gap="16px">
                  {carAccessories.map((item: any, i: any) => (
                    <Flex
                      flexDir="column"
                      justifyContent="center"
                      align="center"
                      key={i}
                    >
                      <Image
                        h="13px"
                        w="13px"
                        objectFit="contain"
                        src={item.img}
                      />
                      <Text
                        mt="8px"
                        fontSize="12px"
                        color="#646464"
                        fontWeight={500}
                      >
                        {item.name}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Pick_Return;
