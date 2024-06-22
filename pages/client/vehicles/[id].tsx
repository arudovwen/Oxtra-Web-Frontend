import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const SingleVehicle = () => {
  const router = useRouter();
  return (
    <Flex
      border="1px solid #E4E4E4"
      borderRadius="16px"
      minH="42rem"
      w="100%"
      p="24px"
      flexDir="column"
    >
      <Flex align="center" justifyContent="space-between">
        <Flex
          gap="5px"
          align="center"
          color="#444648"
          fontSize="14px"
          fontWeight={500}
          cursor="pointer"
          lineHeight="14px"
          onClick={() => router.back()}
        >
          <IoArrowBack size="24px" />
          <Text>Back</Text>
        </Flex>

        <Text color="#444" fontWeight={700} lineHeight="16px">
          Vehicle Details
        </Text>

        <Flex
          gap="5px"
          align="center"
          color="#C70000"
          fontSize="14px"
          fontWeight={500}
          cursor="pointer"
          lineHeight="14px"
        >
          <MdClose size="16px" />
          <Text>Back</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SingleVehicle;
