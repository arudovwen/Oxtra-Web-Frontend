import React, { useState, useRef, useEffect } from "react";
import Typography from "../../constants/Typorgraphy";
import classNames from "classnames";
import { TbPointFilled, TbPoint } from "react-icons/tb";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  Box,
  RadioGroup,
  Button,
  Flex,
  Input,
  Radio,
  Text,
  Grid,
  GridItem,
  Image,
  Spinner,
} from "@chakra-ui/react";
import useCustomToast from "@/utils/notifications";
import { useAddVehicleDocs } from "@/services/query/vehicle";
import { useRouter } from "next/router";
import { useUploadFile } from "@/services/query/file";
import { MdClose } from "react-icons/md";

const DocumentForm = () => {
  const inputClasses = classNames(
    "mt-[12px] text-[14px]  text-[#666666] rounded-[8px] py-[14px] px-[16px] border border-[#cccccc]"
  );

  const labelClasses = classNames("mt-auto text-[#797980] text-[10px]");

  const boxClasses = classNames(
    "bg-[#F9FAFB] h-[138px] text-[10px] rounded-[12px] p-[16px]"
  );

  const holderClasses = classNames(
    "text-[#41454C] text-[10px] font-gordita-medium"
  );

  const [values, setValues] = useState({
    license_number: "",
    driver_type: "",
  });

  const [newFiles, setNewFiles] = useState([]);

  const { successToast, errorToast } = useCustomToast();

  const currentFileInfo = useRef({ name: "" });

  const [files, setFiles] = useState({
    certificate: "",
    license: "",
    insurance: "",
    plateNo: "",
    roadWorthy: "",
  });

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

  const router = useRouter();

  const { mutate, isLoading } = useAddVehicleDocs({
    onSuccess: (res: any) => {
      successToast(res?.message);
      router.push("/login");
      sessionStorage.removeItem("vehicleId");
    },
    onError: (err: any) => {
      errorToast(
        err?.response?.data?.message || err?.message || "An Error occurred"
      );
    },
  });

  const [currentInfo, setCurrentInfo] = useState();

  const [fileLimit, setFileLimit] = useState(false);

  const handleUploadChange = (e: any, { name }: any) => {
    const newFile = e.target.files[0];

    if (!newFile) {
      return;
    }

    const fileSizeInBytes = newFile.size;
    const formData = new FormData();
    formData.append("file", newFile);

    const limitInMB = Math.ceil(fileSizeInBytes / 1048576);
    if (limitInMB > 2) {
      setFileLimit(true);
      setCurrentInfo(name);
    } else {
      setFileLimit(false);
      currentFileInfo.current = { name };
      setCurrentInfo(name);
      uploadMutate(formData);
      setCurrentImage(name);
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: newFile?.name,
      }));
    }
  };

  const toWords = (str: any) => {
    return str
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (s: any) => s.toUpperCase());
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

  const certificate = useRef(null);
  const roadWorthy = useRef(null);
  const insurance = useRef(null);
  const plateNo = useRef(null);
  const license = useRef(null);

  const handleButtonClick = ({ ref }: any) => {
    if (ref && ref.current) {
      ref.current.click();
    }
  };

  const [vehicleId, setVehicleId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedVehicles =
        // @ts-ignore
        JSON.parse(sessionStorage.getItem("vehicleId")) || [];
        setVehicleId(storedVehicles);
    }
  }, []);

  const action = () => {
    mutate({
      // @ts-ignore
      vehicle_id: vehicleId,
      license_number: values?.license_number,
      driver_type: values?.driver_type,

      // @ts-ignore
      document_images: newFiles?.map((item) => item?.url),
    });
  };

  return (
    <Box mt="-30px">
      <Text color="#444648" fontWeight={500} fontSize="24px">
        Documents
      </Text>

      <Text mt="16px" color="#646668" fontSize="14px">
        Please enter the required details to get started
      </Text>

      <Box w="full" my="32px">
        <Text className={labelClasses} fontSize="12px" fontWeight={500}>
          License number
        </Text>

        <Input
          h="44px"
          className={inputClasses}
          value={values?.license_number}
          onChange={(e) => {
            setValues({
              ...values,
              license_number: e.target.value,
            });
          }}
        />
      </Box>

      <Text color="#444648" fontSize="13px">
        Oxtra offers trained drivers to handle your vehicle. Will you drive or
        use our driver? Choosing to drive yourself can earn you more.
      </Text>

      <Flex>
        <Flex my="16px" align="center">
          <RadioGroup
            value={values?.driver_type}
            onChange={(e) =>
              setValues({
                ...values,
                driver_type: e,
              })
            }
            display="flex"
            // @ts-ignore
            align="center"
            gap="32px"
          >
            <Radio size="sm" value={"assigned"}>
              <Text
                pt="3px"
                color={
                  values?.driver_type === "assigned" ? "#438950" : "##444648"
                }
                fontWeight={values?.driver_type === "assigned" ? 500 : 400}
                fontSize="13px"
              >
                Oxtra can provide driver
              </Text>
            </Radio>
            <Radio size="sm" value={"self"}>
              <Text
                pt="3px"
                color={values?.driver_type === "self" ? "#438950" : "#444648"}
                fontWeight={values.driver_type === "self" ? 500 : 400}
                fontSize="13px"
              >
                I want to drive
              </Text>
            </Radio>
          </RadioGroup>
        </Flex>
      </Flex>

      <Box mt="32px">
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
                {isUploading && currentImage === "certificate" ? (
                  <Spinner color="#438950" size="sm" />
                ) : (
                  <Flex
                    w="20px"
                    h="20px"
                    border="1px solid #e0e0e0"
                    cursor="pointer"
                    display={files?.certificate ? "flex" : "none"}
                    rounded="full"
                    onClick={() => handleRemove("certificate")}
                    justifyContent="center"
                    align="center"
                  >
                    <MdClose size="13px" />
                  </Flex>
                )}
              </Flex>
              <Text
                /* @ts-ignore */
                textAlign={files.certificate ? "center" : "start"}
                className={labelClasses}
              >
                {/* @ts-ignore */}
                {files.certificate || "Certificate of vehicle registration"}
              </Text>

              <Input
                id="image_upload"
                ref={certificate}
                onChange={(e) =>
                  handleUploadChange(e, {
                    name: "certificate",
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
                      ref: certificate,
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
                fileLimit && currentInfo === "certificate" ? "block" : "none"
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
                {isUploading && currentImage === "roadWorthy" ? (
                  <Spinner color="#438950" size="sm" />
                ) : (
                  <Flex
                    w="20px"
                    h="20px"
                    border="1px solid #e0e0e0"
                    cursor="pointer"
                    display={files?.roadWorthy ? "flex" : "none"}
                    rounded="full"
                    onClick={() => handleRemove("roadWorthy")}
                    justifyContent="center"
                    align="center"
                  >
                    <MdClose size="13px" />
                  </Flex>
                )}
              </Flex>
              <Text
                /* @ts-ignore */
                textAlign={files.roadWorthy ? "center" : "start"}
                className={labelClasses}
              >
                {/* @ts-ignore */}
                {files.roadWorthy || "Road worthiness"}
              </Text>

              <Input
                id="image_upload"
                ref={roadWorthy}
                onChange={(e) =>
                  handleUploadChange(e, {
                    name: "roadWorthy",
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
                      ref: roadWorthy,
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
                fileLimit && currentInfo === "roadWorthy" ? "block" : "none"
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
                {isUploading && currentImage === "insurance" ? (
                  <Spinner color="#438950" size="sm" />
                ) : (
                  <Flex
                    w="20px"
                    h="20px"
                    border="1px solid #e0e0e0"
                    cursor="pointer"
                    display={files?.insurance ? "flex" : "none"}
                    rounded="full"
                    onClick={() => handleRemove("insurance")}
                    justifyContent="center"
                    align="center"
                  >
                    <MdClose size="13px" />
                  </Flex>
                )}
              </Flex>
              <Text
                /* @ts-ignore */
                textAlign={files.insurance ? "center" : "start"}
                className={labelClasses}
              >
                {/* @ts-ignore */}
                {files.insurance || "Vehicle insurance certificate"}
              </Text>

              <Input
                id="image_upload"
                ref={insurance}
                onChange={(e) =>
                  handleUploadChange(e, {
                    name: "insurance",
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
                      ref: insurance,
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
                fileLimit && currentInfo === "insurance" ? "block" : "none"
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
                {isUploading && currentImage === "plateNo" ? (
                  <Spinner color="#438950" size="sm" />
                ) : (
                  <Flex
                    w="20px"
                    h="20px"
                    border="1px solid #e0e0e0"
                    cursor="pointer"
                    display={files?.plateNo ? "flex" : "none"}
                    rounded="full"
                    onClick={() => handleRemove("plateNo")}
                    justifyContent="center"
                    align="center"
                  >
                    <MdClose size="13px" />
                  </Flex>
                )}
              </Flex>
              <Text
                /* @ts-ignore */
                textAlign={files.plateNo ? "center" : "start"}
                className={labelClasses}
              >
                {/* @ts-ignore */}
                {files.plateNo || "Vehicle plate number"}
              </Text>

              <Input
                id="image_upload"
                ref={plateNo}
                onChange={(e) =>
                  handleUploadChange(e, {
                    name: "plateNo",
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
                      ref: plateNo,
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
                fileLimit && currentInfo === "plateNo" ? "block" : "none"
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
                {isUploading && currentImage === "license" ? (
                  <Spinner color="#438950" size="sm" />
                ) : (
                  <Flex
                    w="20px"
                    h="20px"
                    border="1px solid #e0e0e0"
                    cursor="pointer"
                    display={files?.license ? "flex" : "none"}
                    rounded="full"
                    onClick={() => handleRemove("license")}
                    justifyContent="center"
                    align="center"
                  >
                    <MdClose size="13px" />
                  </Flex>
                )}
              </Flex>
              <Text
                /* @ts-ignore */
                textAlign={files.license ? "center" : "start"}
                className={labelClasses}
              >
                {/* @ts-ignore */}
                {files.license || "Drivers license"}
              </Text>

              <Input
                id="image_upload"
                ref={license}
                onChange={(e) =>
                  handleUploadChange(e, {
                    name: "license",
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
                      ref: license,
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
                fileLimit && currentInfo === "license" ? "block" : "none"
              }
              textAlign="center"
              mt="5px"
              fontSize="12px"
            >
              File size exceeds 2MB limit!
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Flex align="center" mt="40px" gap="24px">
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

export default DocumentForm;
