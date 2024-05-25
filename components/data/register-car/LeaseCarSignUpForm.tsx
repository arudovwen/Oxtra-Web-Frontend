import AuthInput from "@/components/constants/AuthInput";
import { countries } from "@/components/constants/arrays";
import { signUpValues, validateSignupSchema } from "@/utils/validation";
import { Box, Button, Flex, Image, Radio, Text } from "@chakra-ui/react";
import Select from "react-select";
import classNames from "classnames";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-multi-date-picker";
import { useRegisterUser } from "@/services/query/auth";
import useCustomToast from "@/utils/notifications";
import { formatDate } from "@/helpers/helpers";

const LeaseCarSignUpForm = () => {
  const labelClasses = classNames(
    "text-[12px] text-[#4c4c4c] font-gordita-medium"
  );
  const router = useRouter();

  const [show, setShow] = useState(false);

  const { successToast, errorToast } = useCustomToast();

  const { mutate, isLoading } = useRegisterUser({
    onSuccess: (res: any) => {
      successToast(res?.message);
      router.push("/register-car/vehicle");
      localStorage.setItem("id", JSON.stringify(res));
    },
    onError: (err: any) => {
      errorToast(
        err?.response?.data?.message || err?.message || "An Error occurred"
      );
    },
  });

  const [check, setCheck] = useState(false);
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "100%",
      minHeight: "44px",
      color: "#646668",
      fontSize: "14px",
      cursor: "pointer",
      borderRadius: "8px",
      border: "1px solid #C4C6C8",
      background: "unset",
    }),
    menu: (provided: any) => ({
      ...provided,
      fontSize: "13px",
      backgroundColor: "#fff",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isFocused ? "" : "",
      backgroundColor: state.isFocused ? "#f4f6f8" : "",
    }),
  };

  const handleSubmit = (values = "") => {
    /* @ts-ignore */
    const { phoneCode, dob, phone, ...rest } = values;
    mutate({
      ...rest,
      phoneCode: phoneCode?.value,
      dob: formatDate(dob),
    });
  };

  const codeOption = countries?.map((code) => ({
    value: `+${code?.code}`,
    label: `+${code?.code}`,
  }));

  return (
    <Flex align="center" gap="52px">
      <Box>
        <Image
          src="/assets/car-key.jpg"
          w="534px"
          h="710px"
          objectFit="contain"
        />
      </Box>
      <Box>
        <Text fontSize="32px" fontWeight={700} color="#444648">
          Put up your car
        </Text>
        <Text mt="12px" fontSize="14px" color="#646668">
          Please enter the required details to get started
        </Text>

        <Formik
          /* @ts-ignore */
          onSubmit={handleSubmit}
          initialValues={signUpValues}
          validationSchema={validateSignupSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setValues,
            isValid,
            dirty,
          }) => (
            /* @ts-ignore */
            <Form onSubmit={handleSubmit}>
              <Flex flexDir="column" gap="24px" mt="28px">
                <Flex w="full" align="center" gap="20px">
                  <Box w="full">
                    <Text className={labelClasses}>First name</Text>
                    <AuthInput
                      placeholder="Enter your first name"
                      name="firstName"
                      mt
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.firstName}
                      error={
                        errors?.firstName &&
                        touched?.firstName &&
                        errors?.firstName
                      }
                    />
                  </Box>

                  <Box w="full">
                    <Text className={labelClasses}>Last name</Text>
                    <AuthInput
                      placeholder="Enter your last name"
                      name="lastName"
                      mt
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.lastName}
                      error={
                        errors?.lastName &&
                        touched?.lastName &&
                        errors?.lastName
                      }
                    />
                  </Box>
                </Flex>

                <Flex align="center" w="full" gap="24px">
                  <Box w="30%">
                    <label htmlFor="expiration-date" className={labelClasses}>
                      Phone code
                    </label>
                    <div className="mt-[5px]">
                      <Select
                        styles={customStyles}
                        placeholder="+234"
                        /* @ts-ignore */
                        options={codeOption}
                        value={values?.phoneCode}
                        defaultValue={values?.phoneCode}
                        onChange={(selectionOption) =>
                          setValues({
                            ...values,
                            /* @ts-ignore */
                            phoneCode: selectionOption,
                          })
                        }
                        components={{
                          IndicatorSeparator: () => (
                            <div style={{ display: "none" }}></div>
                          ),
                          DropdownIndicator: () => (
                            <div className="mr-[16px]">
                              <IoIosArrowDown size="20px" />
                            </div>
                          ),
                        }}
                      />
                    </div>
                  </Box>

                  <Box w="80%">
                    <label htmlFor="expiration-date" className={labelClasses}>
                      Phone number
                    </label>
                    <div>
                      <AuthInput
                        placeholder="08083594505"
                        name="phoneNumber"
                        onChange={(e) => {
                          const inputPhone = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 11);
                          handleChange({
                            target: {
                              name: "phoneNumber",
                              value: `${inputPhone}`,
                            },
                          });
                        }}
                        onBlur={handleBlur}
                        value={values?.phoneNumber}
                        error={
                          errors?.phoneNumber &&
                          touched?.phoneNumber &&
                          errors?.phoneNumber
                        }
                      />
                    </div>
                  </Box>
                </Flex>

                <Box>
                  <Text className={labelClasses}>Email</Text>
                  <AuthInput
                    placeholder="Enter your email address"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.email}
                    error={errors?.email && touched?.email && errors?.email}
                  />
                </Box>

                <Box>
                  <Text className={labelClasses}>Password</Text>
                  <AuthInput
                    placeholder="Enter password"
                    value={values?.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    error={
                      errors?.password && touched?.password && errors?.password
                    }
                    onClick={() => setShow((prev) => !prev)}
                    password={show ? false : true}
                    show
                    type={show ? "text" : "password"}
                  />{" "}
                </Box>

                <Box>
                  <Text mb="4px" className={labelClasses}>
                    Date of birth
                  </Text>
                  <DatePicker
                    placeholder="Select Date"
                    value={values?.dob}
                    onChange={(date: any) => {
                      setValues({ ...values, dob: date });
                    }}
                  />{" "}
                </Box>
              </Flex>

              <Box flexDir="column" mt="28px">
                <Flex
                  align="center"
                  cursor="pointer"
                  w="fit-content"
                  onClick={() => setCheck(!check)}
                  gap="8px"
                >
                  <Radio isChecked={check} />
                  <Text fontSize="12px" color="#444648">
                    Accept our{" "}
                    <span style={{ fontWeight: 700 }}>
                      Terms and Conditions
                    </span>
                  </Text>
                </Flex>

                <Button
                  type="submit"
                  isLoading={isLoading}
                  h="56px"
                  mt="28px"
                  w="full"
                  isDisabled={!isValid || !dirty || !check}
                >
                  Next
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default LeaseCarSignUpForm;
