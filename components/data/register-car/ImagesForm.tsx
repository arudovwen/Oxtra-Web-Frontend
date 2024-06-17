import React, { useEffect, useRef, useState } from "react";
import { useUploadFile } from "@/services/query/file";
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
  Spinner,
  Text,
} from "@chakra-ui/react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";

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
  const [newFiles, setNewFiles] = useState([]);

  const { successToast, errorToast } = useCustomToast();

  const currentFileInfo = useRef({ name: "", url: "" });
  const [currentInfo, setCurrentInfo] = useState();

  const toWords = (str: any) => {
    return str
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (s: any) => s.toUpperCase());
  };

  const { mutate: uploadMutate, isLoading: isUploading } = useUploadFile({
    onSuccess: (res: any) => {
      const { name } = currentFileInfo.current;

      // @ts-ignore
      const fileIndex = newFiles.findIndex((file) => file.name === name);

      if (fileIndex !== -1) {
        const updatedFiles = [...newFiles];
        // @ts-ignore
        updatedFiles[fileIndex] = { label: toWords(name), url: res?.data };
        setNewFiles(updatedFiles);
      } else {
        // @ts-ignore
        setNewFiles((prevFiles) => [
          ...prevFiles,
          { label: toWords(name), url: res?.data },
        ]);
      }
    },
    onError: (err: any) => {
      errorToast(
        err?.response?.data?.message || err?.message || "An Error occurred"
      );
    },
  });

  const [currentImage, setCurrentImage] = useState("");

  const { mutate, isLoading } = useAddVehicle({
    onSuccess: (res: any) => {
      successToast(res?.message);
      router.push("/register-car/documents");
      sessionStorage.setItem("vehicleId", res?.data);
      sessionStorage.removeItem("vehicles");
    },
    onError: (err: any) => {
      errorToast(
        err?.response?.data?.message || err?.message || "An Error occurred"
      );
    },
  });

  const [fileLimit, setFileLimit] = useState(false);

  const handleUploadChange = (e: any, { name }: any) => {
    const newFile = e.target.files[0];

    if (!newFile) {
      return;
    }

    const fileSizeInBytes = newFile.size;
    const newFileURL = URL.createObjectURL(newFile);
    const formData = new FormData();
    formData.append("file", newFile);

    const limitInMB = Math.ceil(fileSizeInBytes / 1048576);
    if (limitInMB > 2) {
      setFileLimit(true);
      // @ts-ignore
      setCurrentInfo(name);
    } else {
      setFileLimit(false);
      currentFileInfo.current = { name, url: newFileURL };
      setCurrentInfo;
      uploadMutate(formData);
      // Update files state if necessary
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: newFile?.name,
      }));
      setCurrentImage(name);
    }
  };

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
      // @ts-ignore
      vehicle_type: vehicles?.vehicle_type?.label,
      // @ts-ignore
      price_per_day: vehicles?.price_per_day,
      // @ts-ignore
      brand: vehicles?.brand?.label,
      // @ts-ignore
      model: vehicles?.model?.label,
      // @ts-ignore
      year: vehicles?.year,
      // @ts-ignore
      transmission: vehicles?.transmission?.value,
      // @ts-ignore
      color: vehicles?.color?.value,
      // @ts-ignore
      boot_capacity: vehicles?.boot_capacity?.value,
      // @ts-ignore
      power: vehicles?.power?.value,
      // @ts-ignore
      doors: vehicles?.doors?.value,
      // @ts-ignore
      no_of_seats: vehicles?.no_of_seats?.value,
      // @ts-ignore
      plate_number: vehicles?.plate_number,
      // @ts-ignore
      extras: vehicles?.extras,
      car_images: newFiles,
    });
  };

  const handleRemove = (nameToRemove: any) => {
    const indexToRemove = newFiles.findIndex(
      // @ts-ignore
      (file) => file?.label === toWords(nameToRemove)
    );

    if (indexToRemove !== -1) {
      const updatedNewFiles = [...newFiles];
      updatedNewFiles.splice(indexToRemove, 1);
      setNewFiles(updatedNewFiles);

      setFiles((prevFiles) => ({
        ...prevFiles,
        [nameToRemove]: "",
      }));
    }
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
            <Flex align="center" justifyContent="space-between">
              <Flex align="center" gap="8px">
                <Image
                  src="/assets/upload.jpg"
                  w="32px"
                  h="32px"
                  objectFit="contain"
                />
                <Text className={holderClasses}>Select file to upload</Text>
              </Flex>
              {isUploading && currentImage === "exteriorBackLeft" ? (
                <Spinner color="#438950" size="sm" />
              ) : (
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid #e0e0e0"
                  cursor="pointer"
                  display={files?.exteriorBackLeft ? "flex" : "none"}
                  rounded="full"
                  onClick={() => handleRemove("exteriorBackLeft")}
                  justifyContent="center"
                  align="center"
                >
                  <MdClose size="13px" />
                </Flex>
              )}
            </Flex>
            <Text
              /* @ts-ignore */
              textAlign={files.exteriorBackLeft ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.exteriorBackLeft ||
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
                isDisabled={isUploading}
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

          <Text
            color="tomato"
            display={
              fileLimit && currentInfo === "exteriorBackLeft" ? "block" : "none"
            }
            textAlign="center"
            mt="5px"
            fontSize="12px"
          >
            File size exceeds 2MB limit!
          </Text>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" justifyContent="space-between">
              <Flex align="center" gap="8px">
                <Image
                  src="/assets/upload.jpg"
                  w="32px"
                  h="32px"
                  objectFit="contain"
                />
                <Text className={holderClasses}>Select file to upload</Text>
              </Flex>

              {isUploading && currentImage === "exteriorBackRight" ? (
                <Spinner color="#438950" size="sm" />
              ) : (
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid #e0e0e0"
                  cursor="pointer"
                  onClick={() => handleRemove("exteriorBackRight")}
                  display={files?.exteriorBackRight ? "flex" : "none"}
                  rounded="full"
                  justifyContent="center"
                  align="center"
                >
                  <MdClose size="13px" />
                </Flex>
              )}
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.exteriorBackRight ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.exteriorBackRight ||
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
                isDisabled={isUploading}
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

          <Text
            color="tomato"
            display={
              fileLimit && currentInfo === "exteriorBackRight"
                ? "block"
                : "none"
            }
            textAlign="center"
            mt="5px"
            fontSize="12px"
          >
            File size exceeds 2MB limit!
          </Text>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" justifyContent="space-between">
              <Flex align="center" gap="8px">
                <Image
                  src="/assets/upload.jpg"
                  w="32px"
                  h="32px"
                  objectFit="contain"
                />
                <Text className={holderClasses}>Select file to upload</Text>
              </Flex>
              {isUploading && currentImage === "exteriorLeft" ? (
                <Spinner color="#438950" size="sm" />
              ) : (
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid #e0e0e0"
                  cursor="pointer"
                  onClick={() => handleRemove("exteriorLeft")}
                  display={files?.exteriorLeft ? "flex" : "none"}
                  rounded="full"
                  justifyContent="center"
                  align="center"
                >
                  <MdClose size="13px" />
                </Flex>
              )}
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.exteriorLeft ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.exteriorLeft ||
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
                isDisabled={isUploading}
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

          <Text
            color="tomato"
            display={
              fileLimit && currentInfo === "exteriorLeft" ? "block" : "none"
            }
            textAlign="center"
            mt="5px"
            fontSize="12px"
          >
            File size exceeds 2MB limit!
          </Text>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" justifyContent="space-between">
              <Flex align="center" gap="8px">
                <Image
                  src="/assets/upload.jpg"
                  w="32px"
                  h="32px"
                  objectFit="contain"
                />
                <Text className={holderClasses}>Select file to upload</Text>
              </Flex>
              {isUploading && currentImage === "exteriorRight" ? (
                <Spinner color="#438950" size="sm" />
              ) : (
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid #e0e0e0"
                  cursor="pointer"
                  onClick={() => handleRemove("exteriorRight")}
                  display={files?.exteriorRight ? "flex" : "none"}
                  rounded="full"
                  justifyContent="center"
                  align="center"
                >
                  <MdClose size="13px" />
                </Flex>
              )}
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.exteriorRight ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.exteriorRight ||
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
                isDisabled={isUploading}
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

          <Text
            color="tomato"
            display={
              fileLimit && currentInfo === "exteriorRight" ? "block" : "none"
            }
            textAlign="center"
            mt="5px"
            fontSize="12px"
          >
            File size exceeds 2MB limit!
          </Text>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" justifyContent="space-between">
              <Flex align="center" gap="8px">
                <Image
                  src="/assets/upload.jpg"
                  w="32px"
                  h="32px"
                  objectFit="contain"
                />
                <Text className={holderClasses}>Select file to upload</Text>
              </Flex>
              {isUploading && currentImage === "intBack" ? (
                <Spinner color="#438950" size="sm" />
              ) : (
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid #e0e0e0"
                  cursor="pointer"
                  onClick={() => handleRemove("intBack")}
                  display={files?.intBack ? "flex" : "none"}
                  rounded="full"
                  justifyContent="center"
                  align="center"
                >
                  <MdClose size="13px" />
                </Flex>
              )}
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.intBack ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.intBack || "Interior back"}
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
                isDisabled={isUploading}
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

          <Text
            color="tomato"
            display={fileLimit && currentInfo === "intBack" ? "block" : "none"}
            textAlign="center"
            mt="5px"
            fontSize="12px"
          >
            File size exceeds 2MB limit!
          </Text>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" justifyContent="space-between">
              <Flex align="center" gap="8px">
                <Image
                  src="/assets/upload.jpg"
                  w="32px"
                  h="32px"
                  objectFit="contain"
                />
                <Text className={holderClasses}>Select file to upload</Text>
              </Flex>
              {isUploading && currentImage === "intFront" ? (
                <Spinner color="#438950" size="sm" />
              ) : (
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid #e0e0e0"
                  cursor="pointer"
                  onClick={() => handleRemove("intFront")}
                  display={files?.intFront ? "flex" : "none"}
                  rounded="full"
                  justifyContent="center"
                  align="center"
                >
                  <MdClose size="13px" />
                </Flex>
              )}
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.intFront ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.intFront || "Interior front"}
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
                isDisabled={isUploading}
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

          <Text
            color="tomato"
            display={fileLimit && currentInfo === "intFront" ? "block" : "none"}
            textAlign="center"
            mt="5px"
            fontSize="12px"
          >
            File size exceeds 2MB limit!
          </Text>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" justifyContent="space-between">
              <Flex align="center" gap="8px">
                <Image
                  src="/assets/upload.jpg"
                  w="32px"
                  h="32px"
                  objectFit="contain"
                />
                <Text className={holderClasses}>Select file to upload</Text>
              </Flex>
              {isUploading && currentImage === "doorFrontRight" ? (
                <Spinner color="#438950" size="sm" />
              ) : (
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid #e0e0e0"
                  cursor="pointer"
                  onClick={() => handleRemove("doorFrontRight")}
                  display={files?.doorFrontRight ? "flex" : "none"}
                  rounded="full"
                  justifyContent="center"
                  align="center"
                >
                  <MdClose size="13px" />
                </Flex>
              )}
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.doorFrontRight ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.doorFrontRight || "Door handle front right"}
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
                isDisabled={isUploading}
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

          <Text
            color="tomato"
            display={
              fileLimit && currentInfo === "doorFrontRight" ? "block" : "none"
            }
            textAlign="center"
            mt="5px"
            fontSize="12px"
          >
            File size exceeds 2MB limit!
          </Text>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" justifyContent="space-between">
              <Flex align="center" gap="8px">
                <Image
                  src="/assets/upload.jpg"
                  w="32px"
                  h="32px"
                  objectFit="contain"
                />
                <Text className={holderClasses}>Select file to upload</Text>
              </Flex>
              {isUploading && currentImage === "doorFrontLeft" ? (
                <Spinner color="#438950" size="sm" />
              ) : (
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid #e0e0e0"
                  cursor="pointer"
                  onClick={() => handleRemove("doorFrontLeft")}
                  display={files?.doorFrontLeft ? "flex" : "none"}
                  rounded="full"
                  justifyContent="center"
                  align="center"
                >
                  <MdClose size="13px" />
                </Flex>
              )}
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.doorFrontLeft ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.doorFrontLeft || "Door handle front left"}
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
                isDisabled={isUploading}
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

          <Text
            color="tomato"
            display={
              fileLimit && currentInfo === "doorFrontLeft" ? "block" : "none"
            }
            textAlign="center"
            mt="5px"
            fontSize="12px"
          >
            File size exceeds 2MB limit!
          </Text>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" justifyContent="space-between">
              <Flex align="center" gap="8px">
                <Image
                  src="/assets/upload.jpg"
                  w="32px"
                  h="32px"
                  objectFit="contain"
                />
                <Text className={holderClasses}>Select file to upload</Text>
              </Flex>
              {isUploading && currentImage === "doorBackRight" ? (
                <Spinner color="#438950" size="sm" />
              ) : (
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid #e0e0e0"
                  cursor="pointer"
                  onClick={() => handleRemove("doorBackRight")}
                  display={files?.doorBackRight ? "flex" : "none"}
                  rounded="full"
                  justifyContent="center"
                  align="center"
                >
                  <MdClose size="13px" />
                </Flex>
              )}
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.doorBackRight ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.doorBackRight || "Door handle back right"}
            </Text>

            <Input
              id="image_upload"
              ref={doorBackRight}
              onChange={(e) =>
                handleUploadChange(e, {
                  name: "doorBackRight",
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
                isDisabled={isUploading}
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

          <Text
            color="tomato"
            display={
              fileLimit && currentInfo === "doorBackRight" ? "block" : "none"
            }
            textAlign="center"
            mt="5px"
            fontSize="12px"
          >
            File size exceeds 2MB limit!
          </Text>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" className={boxClasses}>
            <Flex align="center" justifyContent="space-between">
              <Flex align="center" gap="8px">
                <Image
                  src="/assets/upload.jpg"
                  w="32px"
                  h="32px"
                  objectFit="contain"
                />
                <Text className={holderClasses}>Select file to upload</Text>
              </Flex>
              {isUploading && currentImage === "doorBackLeft" ? (
                <Spinner color="#438950" size="sm" />
              ) : (
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid #e0e0e0"
                  cursor="pointer"
                  onClick={() => handleRemove("doorBackLeft")}
                  display={files?.doorBackLeft ? "flex" : "none"}
                  rounded="full"
                  justifyContent="center"
                  align="center"
                >
                  <MdClose size="13px" />
                </Flex>
              )}
            </Flex>

            <Text
              /* @ts-ignore */
              textAlign={files.doorBackLeft ? "center" : "start"}
              className={labelClasses}
            >
              {/* @ts-ignore */}
              {files.doorBackLeft || "Door handle back left"}
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
                isDisabled={isUploading}
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

          <Text
            color="tomato"
            display={
              fileLimit && currentInfo === "doorBackLeft" ? "block" : "none"
            }
            textAlign="center"
            mt="5px"
            fontSize="12px"
          >
            File size exceeds 2MB limit!
          </Text>
        </GridItem>
      </Grid>

      <Flex align="center" mt="24px" gap="24px">
        {/* <Button
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
        </Button> */}
        <Button
          onClick={action}
          isLoading={isLoading}
          w={{ base: "100%", md: "60%" }}
          h="48px"
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default ImagesForm;
