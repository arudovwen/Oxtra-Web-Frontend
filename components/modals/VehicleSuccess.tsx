import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const VehicleSuccess = ({ isOpen, onClose }: any) => {
  const router = useRouter();
  return (
    <Modal
      isCentered
      trapFocus={false}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
      <ModalContent pt="24px" pb="40px" w="464px" borderRadius="8px" bg="#fff">
        <ModalBody p={0}>
          <Flex flexDir="column" align="center">
            <Image src="/success.svg" w="120px" h="120px" objectFit="contain" />
            <Text
              mt="32px"
              color="#214528"
              fontSize="24px"
              fontWeight={700}
              lineHeight="24px"
            >
              Your submission was successful
            </Text>
            <Text
              mt="16px"
              color="#646464"
              fontSize="14px"
              fontWeight={500}
              lineHeight="14px"
            >
              You can check your dashboard for updates
            </Text>

            <Text
              color="#438950"
              textDecor="underline"
              cursor="pointer"
              mt="52px"
              fontWeight={700}
              onClick={() => router.push("/client/vehicles")}
              lineHeight="16px"
            >
              Proceed to Dashboard
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VehicleSuccess;
