import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

const GoBack = ({ onClick }: any) => {
  return (
    <Flex
      align="center"
      onClick={onClick}
      cursor="pointer"
      gap="12px"
      color="#444648"
      w="fit-content"
      fontSize="14px"
      fontWeight={500}
    >
      <IoIosArrowBack size="20px" />
      <Text pt="2px">Back</Text>
    </Flex>
  );
};

export default GoBack;
