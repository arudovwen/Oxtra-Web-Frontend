import DeleteVehicle from "@/components/modals/DeleteVehicle";
import MobileDeleteVehicle from "@/components/modals/MobileDeleteVehicle";
import {
  useDeleteOwnerVehicle,
  useGetUserVehicle,
} from "@/services/query/vehicle";
import useCustomToast from "@/utils/notifications";
import {
  Box,
  Flex,
  Image,
  Skeleton,
  Switch,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const SingleVehicle = () => {
  const router = useRouter();
  const ref = useRef();
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(true);
  const { id } = router.query;
  const { successToast, errorToast } = useCustomToast();
  // @ts-ignore
  const { data, isLoading, refetch } = useGetUserVehicle(id, {
    refetchOnWindowFocus: true,
  });

  const [isMobile] = useMediaQuery("(max-width: 564px)");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [show, setShow] = useState(false);

  const { mutate, isLoading: isDelete } = useDeleteOwnerVehicle({
    onSuccess: (res: any) => {
      successToast(res?.message);
      router.push("/client/vehicles");
    },
    onError: (err: any) => {
      errorToast(
        err?.response?.data?.message || err?.message || "An Error occurred"
      );
    },
  });

  const handleDelete = () => {
    mutate(id);
  };

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        /* @ts-ignore */
        const scrollPosition = ref.current.scrollLeft;
        /* @ts-ignore */
        const maxScroll = ref.current.scrollWidth - ref.current.offsetWidth;
        if (scrollPosition >= maxScroll) {
          setEnd(true);
        } else {
          setEnd(false);
        }
        if (scrollPosition === 0) {
          setStart(true);
        } else {
          setStart(false);
        }
      }
    };

    if (ref.current) {
      /* @ts-ignore */
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref.current) {
        /* @ts-ignore */
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction: any) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -140 : +140;
      /* @ts-ignore */
      ref.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <Flex
      border="1px solid #E4E4E4"
      borderRadius="16px"
      minH="42rem"
      w="100%"
      p="24px"
      flexDir="column"
    >
      <DeleteVehicle
        isOpen={isOpen}
        onClose={onClose}
        action={handleDelete}
        isLoading={isDelete}
      />
      <MobileDeleteVehicle
        isOpen={show}
        onClose={() => setShow(false)}
        action={handleDelete}
        isLoading={isDelete}
      />
      <Flex
        align={{ base: "flex-start", md: "center" }}
        gap={{ base: "24px", md: "unset" }}
        justifyContent="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box w="70%">
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
        </Box>

        <Flex align="center" w="full" justifyContent="space-between">
          <Text color="#444" w="full" fontWeight={700} lineHeight="16px">
            Vehicle Details
          </Text>

          <Flex w="full" justifyContent="flex-end">
            <Flex
              gap="5px"
              align="center"
              color="#C70000"
              fontSize="14px"
              fontWeight={500}
              cursor="pointer"
              onClick={() => (isMobile ? setShow(true) : onOpen())}
              lineHeight="14px"
            >
              <MdClose size="16px" />
              <Text>Delete Vehicle</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        align="flex-start"
        flexDir={{ base: "column", md: "row" }}
        mt="24px"
        gap="24px"
      >
        <Skeleton
          borderRadius="16px"
          isLoaded={!isLoading}
          w={{ base: "100%", md: "45%" }}
        >
          <Flex
            minH="33rem"
            maxH="33rem"
            border="1px solid #EAEAEA"
            borderRadius="16px"
            w="100%"
            p="16px"
            flexDir="column"
          >
            <Text color="#444" fontWeight={700} lineHeight="16px">
              Honda CRV (2015)
            </Text>

            <Box my="16px">
              <Image
                src="/assets/car.jpg"
                w="228px"
                h="136px"
                objectFit="contain"
              />
            </Box>

            <Box pos="relative">
              <Flex
                overflowX="scroll"
                cla
                /* @ts-ignore */
                ref={ref}
                scrollBehavior="smooth"
                transition=".5s ease-in-out"
                className="no_scroller"
              >
                <Flex
                  display={start ? "none" : "flex"}
                  cursor="pointer"
                  pos="absolute"
                  left="0"
                  w="24px"
                  h="full"
                  align="center"
                  justifyContent="center"
                  opacity={0.8}
                  onClick={() => scroll("left")}
                  background="linear-gradient(to right, #FFFFFF 0%, #FFFFFF 80%, #FFFFFF 100%);"
                >
                  <IoIosArrowBack />
                </Flex>

                {data?.data?.car_images?.map((item: any, index: any) => (
                  <Box
                    minW={{ base: "104px", md: "124px" }}
                    mr="13px"
                    key={index + 1}
                  >
                    <Flex
                      border="1px solid #e4e4e4"
                      borderRadius="16px"
                      overflow="hidden"
                      justifyContent="center"
                      align="center"
                    >
                      <Image h={{ base: "60px", md: "72px" }} src={item?.url} />
                    </Flex>
                  </Box>
                ))}

                <Flex
                  display={end ? "none" : "flex"}
                  pos="absolute"
                  right="0"
                  w="24px"
                  h="full"
                  align="center"
                  cursor="pointer"
                  justifyContent="center"
                  opacity={0.8}
                  onClick={() => scroll("right")}
                  background="linear-gradient(to right, #FFFFFF 0%, #FFFFFF 80%, #FFFFFF 100%)"
                >
                  <IoIosArrowForward />
                </Flex>
              </Flex>
            </Box>

            <Flex
              mt="16px"
              borderTop="1px solid #eaeaea"
              borderBottom="1px solid #eaeaea"
              py="16px"
              flexWrap="wrap"
              gap="25px"
              rowGap="0"
            >
              <Flex
                display={
                  data &&
                  data?.data?.extras?.find((item: any) => item === "AC") ===
                    "AC"
                    ? "flex"
                    : "none"
                }
                align="center"
                mb="15px"
                gap="8px"
              >
                <Image
                  h="13px"
                  w="13px"
                  objectFit="contain"
                  src="/assets/ac.jpg"
                />
                <Text color="#646464" fontSize="12px" fontWeight={500}>
                  AC
                </Text>
              </Flex>
              <Flex align="center" mb="15px" gap="8px">
                <Image
                  h="13px"
                  w="13px"
                  objectFit="contain"
                  src="/assets/seater.jpg"
                />
                <Text color="#646464" fontSize="12px" fontWeight={500}>
                  {data?.data?.no_of_seats} Seater
                </Text>
              </Flex>

              <Flex align="center" mb="15px" gap="8px">
                <Image
                  h="13px"
                  w="13px"
                  objectFit="contain"
                  src="/assets/bags.jpg"
                />
                <Text color="#646464" fontSize="12px" fontWeight={500}>
                  {data?.data?.boot_capacity} Bags
                </Text>
              </Flex>

              <Flex align="center" mb="15px" gap="8px">
                <Image
                  h="13px"
                  w="13px"
                  objectFit="contain"
                  src="/assets/automatic.jpg"
                />
                <Text
                  color="#646464"
                  textTransform="capitalize"
                  fontSize="12px"
                  fontWeight={500}
                >
                  {data?.data?.transmission}
                </Text>
              </Flex>

              <Flex
                display={
                  data &&
                  data?.data?.extras?.find(
                    (item: any) => item === "Bluetooth Radio"
                  ) === "Bluetooth Radio"
                    ? "flex"
                    : "none"
                }
                align="center"
                mb="15px"
                gap="8px"
              >
                <Image
                  h="13px"
                  w="13px"
                  objectFit="contain"
                  src="/assets/bluetooth.jpg"
                />
                <Text
                  color="#646464"
                  textTransform="capitalize"
                  fontSize="12px"
                  fontWeight={500}
                >
                  Bluetooth Radio
                </Text>
              </Flex>

              <Flex align="center" mb="15px" gap="8px">
                <Image
                  h="13px"
                  w="13px"
                  objectFit="contain"
                  src="/assets/seater.jpg"
                />
                <Text
                  color="#646464"
                  textTransform="capitalize"
                  fontSize="12px"
                  fontWeight={500}
                >
                  {data?.data?.doors} Doors
                </Text>
              </Flex>

              <Flex
                align="center"
                display={
                  data &&
                  data?.data?.extras?.find(
                    (item: any) => item === "Reverse Camera"
                  ) === "Reverse Camera"
                    ? "flex"
                    : "none"
                }
                mb="15px"
                gap="8px"
              >
                <Image
                  h="13px"
                  w="13px"
                  objectFit="contain"
                  src="/assets/seater.jpg"
                />
                <Text color="#646464" fontSize="12px" fontWeight={500}>
                  Reverse Camera
                </Text>
              </Flex>
            </Flex>

            <Box lineHeight="10px" mt="16px">
              <Text fontSize="10px" color="#444" fontWeight={700}>
                Vehicle Status
              </Text>

              <Flex mt="10px" align="center" justifyContent="space-between">
                <Text color="#646464" lineHeight="12px" fontSize="12px">
                  On a Trip
                </Text>
                <Switch size="sm" />
              </Flex>
            </Box>
          </Flex>
        </Skeleton>

        <Skeleton
          borderRadius="16px"
          isLoaded={!isLoading}
          w={{ base: "100%", md: "55%" }}
        >
          <Flex
            minH="33rem"
            maxH="33rem"
            border="1px solid #EAEAEA"
            borderRadius="16px"
            w="100%"
            p="16px"
            flexDir="column"
          >
            <Text mb="24px" color="#444" fontWeight={700} lineHeight="16px">
              Documents
            </Text>

            {data?.data?.document?.document_images?.map((item: any, i: any) => (
              <Flex
                key={i}
                align="flex-end"
                mb="12px"
                bg="#F5FAF6"
                justifyContent="space-between"
                borderRadius="6px"
                p="13px 16px"
              >
                <Flex align="center" gap="8px">
                  <Box>
                    <Image
                      src="/folder.svg"
                      w="24px"
                      h="24px"
                      objectFit="contain"
                    />
                  </Box>

                  <Box>
                    <Text
                      color="#343434"
                      fontSize="12px"
                      lineHeight="12px"
                      fontWeight={500}
                    >
                      {item?.label}
                    </Text>

                    <Text
                      mt="9px"
                      color="#848484"
                      fontSize="10px"
                      lineHeight="10px"
                    >
                      require-dodument.pdf{" "}
                    </Text>
                  </Box>
                </Flex>

                <a href={item?.url ? item?.url : item} target="_blank">
                  <Flex align="center" gap="4px" cursor="pointer">
                    <Text
                      color="#0A3421"
                      fontSize="10px"
                      lineHeight="10px"
                      fontWeight={500}
                    >
                      View
                    </Text>
                    <Image
                      src="/eye.svg"
                      w="12px"
                      h="12px"
                      objectFit="contain"
                    />
                  </Flex>
                </a>
              </Flex>
            ))}
          </Flex>
        </Skeleton>
      </Flex>
    </Flex>
  );
};

export default SingleVehicle;
