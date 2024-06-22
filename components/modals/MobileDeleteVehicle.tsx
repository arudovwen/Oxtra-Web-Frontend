import React from "react";
import {
  Button,
  Flex,
  Image,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

const MobileDeleteVehicle = ({ isOpen, isLoading, action, onClose }: any) => {
  return (
    <Drawer
      placement="bottom"
      autoFocus={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
      <DrawerContent
        px="32px"
        borderTopRadius="12px"
        bg="#fff"
        pb="24px"
        color="#000"
      >
        <DrawerBody px="0">
          <Flex pb="16px" pt="5px" justifyContent="center" w="full">
            <Flex
              justifyContent="center"
              bg="#000"
              h="5px"
              rounded="full"
              w="40px"
            />
          </Flex>

          <Flex
            pt="24px"
            align="center"
            justifyContent="space-between"
            w="full"
          >
            <Flex align="center" gap="8px">
              <Image src="/trash.svg" w="24px" h="24px" />

              <Text textTransform="capitalize" fontWeight={500} color="red">
                Delete Vehicle?
              </Text>
            </Flex>
          </Flex>

          <Text my="24px" color="#000">
            You’re about to delete this vehicle, this action cannot be undone.
          </Text>

          <Flex gap="24px" mt="12px" justifyContent="flex-end" align="center">
            <Button
              border="1px solid #999999"
              color="#999999"
              onClick={onClose}
              bg="transparent"
              variant="adminPrimary"
              h="48px"
            >
              Cancel
            </Button>
            <Button
              onClick={action}
              isLoading={isLoading}
              bg="transparent"
              _hover={{ bg: "#0A3421", color: "#fff" }}
              _focus={{ bg: "#0A3421", color: "#fff" }}
              _active={{ bg: "#0A3421", color: "#fff" }}
              color="#0A3421"
              h="48px"
            >
              Proceed
            </Button>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDeleteVehicle;
