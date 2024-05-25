import { useAddVehicle } from "@/services/query/vehicle";
import useCustomToast from "@/utils/notifications";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const ImagesForm = () => {
  const boxClasses = classNames(
    "bg-[#F9FAFB] h-[138px] text-[10px] rounded-[12px] p-[16px]"
  );

  const holderClasses = classNames(
    "text-[#41454C] text-[10px] font-gordita-medium"
  );

  const labelClasses = classNames("mt-auto text-[#797980] text-[10px]");
  const [vehicles, setVehicles] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedVehicles =
        // @ts-ignore
        JSON.parse(sessionStorage.getItem("vehicles")) || [];
      setVehicles(storedVehicles);
    }
  }, []);
  const [files, setFiles] = useState({
    exteriorBackLeft: "",
    exteriorBackRight: "",
    exteriorLeft: "",
    exteriorRight: "",
    intBack: "",
    intFront: "",
    doorFrontRight: "",
    doorFrontLeft: "",
    doorBackRight: "",
    doorBackLeft: "",
  });
  const [fileURLs, setFileURLs] = useState([]);

  const handleUploadChange = (e: any, { name }: any) => {
    const newFile = e.target.files[0];

    if (newFile) {
      // Update files state
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: newFile,
      }));

      const newFileURL = URL.createObjectURL(newFile);

      // @ts-ignore
      setFileURLs((prevFileURLs: any) => {
        // Check if the URL for this file already exists
        const existingFileIndex = prevFileURLs?.findIndex(
          (item: any) => item.name === name
        );

        // Revoke the old URL if it exists
        if (existingFileIndex !== -1) {
          URL.revokeObjectURL(prevFileURLs[existingFileIndex].url);

          // Replace the old URL with the new one
          const updatedFileURLs = [...prevFileURLs];
          updatedFileURLs[existingFileIndex] = { name, url: newFileURL };
          return updatedFileURLs;
        }

        // Add the new URL if it doesn't exist
        return [...prevFileURLs, { name, url: newFileURL }];
      });
    }
  };

  useEffect(() => {
    // Cleanup function to revoke object URLs on unmount
    return () => {
      // @ts-ignore
      fileURLs.forEach((fileURL) => {
        // @ts-ignore
        if (fileURL.url) {
          // @ts-ignore
          URL.revokeObjectURL(fileURL.url);
        }
      });
    };
  }, [fileURLs]);

  const { successToast, errorToast } = useCustomToast();

  const { mutate, isLoading } = useAddVehicle({
    onSuccess: (res: any) => {
      successToast(res?.message);
      router.push("/register-car/documents");
      sessionStorage.removeItem("vehicles");
    },
    onError: (err: any) => {
      errorToast(
        err?.response?.data?.message || err?.message || "An Error occurred"
      );
    },
  });

  const xBackLeft = useRef(null);
  const xBackRight = useRef(null);
  const xLeft = useRef(null);
  const xRight = useRef(null);
  const intBack = useRef(null);
  const intFront = useRef(null);
  const doorFrontRight = useRef(null);
  const doorFrontLeft = useRef(null);
  const doorBackRight = useRef(null);
  const doorBackLeft = useRef(null);

  const handleButtonClick = ({ ref }: any) => {
    if (ref && ref.current) {
      ref.current.click();
    }
  };

  const router = useRouter();
  const action = () => {
    mutate({
      brand: vehicles?.brand?.value,
      model: vehicles?.model?.value,
      year: vehicles?.year,
      transmission: vehicles?.transmission?.value,
      color: vehicles?.color?.value,
      boot_capacity: vehicles?.boot_capacity?.value,
      power: vehicles?.power?.value,

      doors: vehicles?.doors?.value,
      no_of_seats: vehicles?.no_of_seats?.value,
      plate_number: vehicles?.plate_number,
      extras: vehicles?.extras,
      car_images: fileURLs.map((image) => image.url),
    });
  };

  return (
    <Box mt="-30px">
      <Text color="#444648" fontWeight={500} fontSize="24px">
        Images
      </Text>
      <Text mt="16px" color="#646668" fontSize="14px">
        Please take the required pictures for each part we have requested for
        and upload accordingly
      </Text>

      <Grid
        mt="24px"
        gap="24px"
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
      >
        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" gap="8px">
              <Image
                src="/assets/upload.jpg"
                w="32px"
                h="32px"
                objectFit="contain"
              />
              <Text className={holderClasses}>Select file to upload</Text>
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.exteriorBackLeft?.name ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.exteriorBackLeft?.name ||
                "Exterior back left (with reverse lights on)"}
            </Text>

            <Input
              id="image_upload"
              ref={xBackLeft}
              onChange={(e) =>
                handleUploadChange(e, {
                  name: "exteriorBackLeft",
                })
              }
              type="file"
              display="none"
              borderColor="black"
            />
            <label htmlFor="image_upload">
              <Button
                mt="12px"
                bg="transparent"
                border="1px solid #438950"
                color="#438950"
                w="full"
                onClick={() =>
                  handleButtonClick({
                    ref: xBackLeft,
                  })
                }
                h="32px"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
              >
                Upload
              </Button>
            </label>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" gap="8px">
              <Image
                src="/assets/upload.jpg"
                w="32px"
                h="32px"
                objectFit="contain"
              />
              <Text className={holderClasses}>Select file to upload</Text>
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.exteriorBackRight?.name ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.exteriorBackRight?.name ||
                "Exterior back right (with reverse lights on)"}
            </Text>

            <Input
              id="image_upload"
              ref={xBackRight}
              onChange={(e) =>
                handleUploadChange(e, {
                  name: "exteriorBackRight",
                })
              }
              type="file"
              display="none"
              borderColor="black"
            />
            <label htmlFor="image_upload">
              <Button
                mt="12px"
                bg="transparent"
                border="1px solid #438950"
                color="#438950"
                w="full"
                onClick={() =>
                  handleButtonClick({
                    ref: xBackRight,
                  })
                }
                h="32px"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
              >
                Upload
              </Button>
            </label>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" gap="8px">
              <Image
                src="/assets/upload.jpg"
                w="32px"
                h="32px"
                objectFit="contain"
              />
              <Text className={holderClasses}>Select file to upload</Text>
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.exteriorLeft?.name ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.exteriorLeft?.name ||
                "Exterior left side (with parking light on)"}
            </Text>

            <Input
              id="image_upload"
              ref={xLeft}
              onChange={(e) =>
                handleUploadChange(e, {
                  name: "exteriorLeft",
                })
              }
              type="file"
              display="none"
              borderColor="black"
            />
            <label htmlFor="image_upload">
              <Button
                mt="12px"
                bg="transparent"
                border="1px solid #438950"
                color="#438950"
                w="full"
                onClick={() =>
                  handleButtonClick({
                    ref: xLeft,
                  })
                }
                h="32px"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
              >
                Upload
              </Button>
            </label>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" gap="8px">
              <Image
                src="/assets/upload.jpg"
                w="32px"
                h="32px"
                objectFit="contain"
              />
              <Text className={holderClasses}>Select file to upload</Text>
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.exteriorRight?.name ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.exteriorRight?.name ||
                "Exterior right side (with parking lights on)"}
            </Text>

            <Input
              id="image_upload"
              ref={xRight}
              onChange={(e) =>
                handleUploadChange(e, {
                  name: "exteriorRight",
                })
              }
              type="file"
              display="none"
              borderColor="black"
            />
            <label htmlFor="image_upload">
              <Button
                mt="12px"
                bg="transparent"
                border="1px solid #438950"
                color="#438950"
                w="full"
                onClick={() =>
                  handleButtonClick({
                    ref: xRight,
                  })
                }
                h="32px"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
              >
                Upload
              </Button>
            </label>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" gap="8px">
              <Image
                src="/assets/upload.jpg"
                w="32px"
                h="32px"
                objectFit="contain"
              />
              <Text className={holderClasses}>Select file to upload</Text>
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.intBack?.name ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.intBack?.name || "Interior back"}
            </Text>

            <Input
              id="image_upload"
              ref={intBack}
              onChange={(e) =>
                handleUploadChange(e, {
                  name: "intBack",
                })
              }
              type="file"
              display="none"
              borderColor="black"
            />
            <label htmlFor="image_upload">
              <Button
                mt="12px"
                bg="transparent"
                border="1px solid #438950"
                color="#438950"
                w="full"
                onClick={() =>
                  handleButtonClick({
                    ref: intBack,
                  })
                }
                h="32px"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
              >
                Upload
              </Button>
            </label>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" gap="8px">
              <Image
                src="/assets/upload.jpg"
                w="32px"
                h="32px"
                objectFit="contain"
              />
              <Text className={holderClasses}>Select file to upload</Text>
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.intFront?.name ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.intFront?.name || "Interior front"}
            </Text>

            <Input
              id="image_upload"
              ref={intFront}
              onChange={(e) =>
                handleUploadChange(e, {
                  name: "intFront",
                })
              }
              type="file"
              display="none"
              borderColor="black"
            />
            <label htmlFor="image_upload">
              <Button
                mt="12px"
                bg="transparent"
                border="1px solid #438950"
                color="#438950"
                w="full"
                onClick={() =>
                  handleButtonClick({
                    ref: intFront,
                  })
                }
                h="32px"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
              >
                Upload
              </Button>
            </label>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" gap="8px">
              <Image
                src="/assets/upload.jpg"
                w="32px"
                h="32px"
                objectFit="contain"
              />
              <Text className={holderClasses}>Select file to upload</Text>
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.doorFrontRight?.name ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.doorFrontRight?.name || "Door handle front right"}
            </Text>

            <Input
              id="image_upload"
              ref={doorFrontRight}
              onChange={(e) =>
                handleUploadChange(e, {
                  name: "doorFrontRight",
                })
              }
              type="file"
              display="none"
              borderColor="black"
            />
            <label htmlFor="image_upload">
              <Button
                mt="12px"
                bg="transparent"
                border="1px solid #438950"
                color="#438950"
                w="full"
                onClick={() =>
                  handleButtonClick({
                    ref: doorFrontRight,
                  })
                }
                h="32px"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
              >
                Upload
              </Button>
            </label>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" gap="8px">
              <Image
                src="/assets/upload.jpg"
                w="32px"
                h="32px"
                objectFit="contain"
              />
              <Text className={holderClasses}>Select file to upload</Text>
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.doorFrontLeft?.name ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.doorFrontLeft?.name || "Door handle front left"}
            </Text>

            <Input
              id="image_upload"
              ref={doorFrontLeft}
              onChange={(e) =>
                handleUploadChange(e, {
                  name: "doorFrontLeft",
                })
              }
              type="file"
              display="none"
              borderColor="black"
            />
            <label htmlFor="image_upload">
              <Button
                mt="12px"
                bg="transparent"
                border="1px solid #438950"
                color="#438950"
                w="full"
                onClick={() =>
                  handleButtonClick({
                    ref: doorFrontLeft,
                  })
                }
                h="32px"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
              >
                Upload
              </Button>
            </label>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" gap="8px">
              <Image
                src="/assets/upload.jpg"
                w="32px"
                h="32px"
                objectFit="contain"
              />
              <Text className={holderClasses}>Select file to upload</Text>
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.doorbackRight?.name ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.doorbackRight?.name || "Door handle back right"}
            </Text>

            <Input
              id="image_upload"
              ref={doorBackRight}
              onChange={(e) =>
                handleUploadChange(e, {
                  name: "doorbackRight",
                })
              }
              type="file"
              display="none"
              borderColor="black"
            />
            <label htmlFor="image_upload">
              <Button
                mt="12px"
                bg="transparent"
                border="1px solid #438950"
                color="#438950"
                w="full"
                onClick={() =>
                  handleButtonClick({
                    ref: doorBackRight,
                  })
                }
                h="32px"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
              >
                Upload
              </Button>
            </label>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" gap="8px">
              <Image
                src="/assets/upload.jpg"
                w="32px"
                h="32px"
                objectFit="contain"
              />
              <Text className={holderClasses}>Select file to upload</Text>
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.doorBackLeft?.name ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.doorBackLeft?.name || "Door handle back left"}
            </Text>

            <Input
              id="image_upload"
              ref={doorBackLeft}
              onChange={(e) =>
                handleUploadChange(e, {
                  name: "doorBackLeft",
                })
              }
              type="file"
              display="none"
              borderColor="black"
            />
            <label htmlFor="image_upload">
              <Button
                mt="12px"
                bg="transparent"
                border="1px solid #438950"
                color="#438950"
                w="full"
                onClick={() =>
                  handleButtonClick({
                    ref: doorBackLeft,
                  })
                }
                h="32px"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
              >
                Upload
              </Button>
            </label>
          </Flex>
        </GridItem>
      </Grid>

      <Flex align="center" mt="24px" gap="24px">
        <Button
          bg="transparent"
          border="1px solid #646464"
          color="#646464"
          w="40%"
          h="48px"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          onClick={() => router.push("/register-car/documents")}
          _focus={{ bg: "transparent" }}
        >
          Skip
        </Button>
        <Button onClick={action} isLoading={isLoading} w="60%" h="48px">
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default ImagesForm;
