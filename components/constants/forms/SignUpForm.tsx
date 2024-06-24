import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Select from "react-select";
import { useRouter } from "next/router";
import DatePicker from "react-multi-date-picker";
import { formatDate, formatTime, formatt } from "@/helpers/helpers";
import { IoIosArrowDown } from "react-icons/io";
import { Form, Formik } from "formik";
import AuthInput from "../AuthInput";
import { countries } from "../arrays";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Radio,
  Text,
} from "@chakra-ui/react";
import Pick_Return from "../Pick_Return";
import { signUpValues, validateSignupSchema } from "@/utils/validation";
import { useRegisterUser } from "@/services/query/auth";
import useCustomToast from "@/utils/notifications";
import { useRentCar } from "@/services/query/rent";

const labelClasses = classNames(
  "text-[12px] leading-[12px] font-gordita-bold text-[#444648]",
);

const SignUpForm = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const [tandC, setTandC] = useState(false);
  const [checkout, setCheckout] = useState(null);

  const { successToast, errorToast } = useCustomToast();

  const [rentValues, setRentValues] = useState({});

  useEffect(() => {
    const checkoutValue = localStorage.getItem("checkout");
    /* @ts-ignore */
    const rent_values = JSON.parse(sessionStorage.getItem("rent-values"));
    setRentValues(rent_values);
    /* @ts-ignore */
    setCheckout(checkoutValue);
  }, []);

  const { mutate: rentMutate, isLoading: isRent } = useRentCar({
    onSuccess: (res: any) => {
      successToast(res?.message);
      router.push("/customer/rent-a-car/requests");
      sessionStorage.removeItem("rent_values");
      sessionStorage.removeItem("rent-values");
    },
    onError: (err: any) => {
      errorToast(
        err?.response?.data?.message || err?.message || "An Error occurred",
      );
    },
  });

  const calculateDayDifference = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    // @ts-ignore
    const differenceInTime = end - start;

    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays;
  };

  const handleRent = () => {
    rentMutate({
      // @ts-ignore
      vehicle_id: rentValues?.vehicle_id,
      // @ts-ignore
      price: rentValues?.price,
      // @ts-ignore
      notes: rentValues?.notes,
      // @ts-ignore
      area_of_usage: rentValues?.area_of_usage,
      // @ts-ignore
      pickup_time: formatTime(rentValues?.rent_values?.pickUp),
      // @ts-ignore
      pickup_date: formatt(rentValues?.rent_values?.pickUp),
      // @ts-ignore
      drop_off: formatt(rentValues?.rent_values?.dropOff),
      // @ts-ignore
      days: calculateDayDifference(
        // @ts-ignore
        rentValues?.rent_values?.pickUp,
        // @ts-ignore
        rentValues?.rent_values?.dropOff,
      ),
      // @ts-ignore
      pickup_location: rentValues?.rent_values?.pickup_location,
      trip_type: "2",
    });
  };

  const { mutate, isLoading } = useRegisterUser({
    onSuccess: (res: any) => {
      localStorage.setItem("user", JSON.stringify(res));
      if (checkout) {
        handleRent();
      } else {
        successToast(res?.message);
        router.push("/customer/rent-a-car/requests");
      }
    },
    onError: (err: any) => {
      errorToast(
        err?.response?.data?.message || err?.message || "An Error occurred",
      );
    },
  });

  const handleSubmit = (values = "") => {
    /* @ts-ignore */
    const { phoneCode, dob, phone, ...rest } = values;
    mutate({
      ...rest,
      user_type: Number(router.query?.id),
      phoneCode: phoneCode?.value,
      dob: formatDate(dob),
    });
  };

  const codeOption = countries?.map((code) => ({
    value: `+${code?.code}`,
    label: `+${code?.code}`,
  }));

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

  const buttonText =
    checkout !== null ? "Create account and Pay" : "Create Account";

  return (
    <Box px="10px" w="100%" fontFamily="gordita">
      <Box
        mt={{ base: "50px", md: "30px" }}
        display={checkout === "checkout" ? "flex" : "none"}
      >
        <Pick_Return />
      </Box>

      <Flex mt="30px" justifyContent="center" w="100%" align="center">
        <Box
          border="1px solid #EAEAEA"
          w="30rem"
          borderRadius="10px"
          py="28px"
          px="20px"
        >
          <Box>
            {" "}
            <Text color="#444648" fontWeight={700} fontSize="24px">
              Sign up
            </Text>
          </Box>

          <Box w="full" maxW="500px" mt="32px">
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
                  <Flex flexDir="column" rowGap="20px" columnGap={4}>
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

                    <Box>
                      <Text className={labelClasses}>Email address</Text>

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
                      <Text className={labelClasses}>Enter password</Text>

                      <AuthInput
                        placeholder="Enter password"
                        value={values?.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="password"
                        error={
                          errors?.password &&
                          touched?.password &&
                          errors?.password
                        }
                        onClick={() => setShow((prev) => !prev)}
                        password={show ? false : true}
                        show
                        type={show ? "text" : "password"}
                      />
                    </Box>

                    <Grid
                      templateColumns={{
                        base: "repeat(2,1fr)",
                        md: "repeat(7,1fr)",
                      }}
                      columnGap="16px"
                      w="full"
                    >
                      <GridItem colSpan={{ base: 1, md: 2 }}>
                        <Text className={labelClasses}>Phone code</Text>
                        <Box mt="5px">
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
                        </Box>
                      </GridItem>

                      <GridItem colSpan={{ base: 1, md: 3 }}>
                        <Text className={labelClasses}>Phone number</Text>

                        <AuthInput
                          placeholder="08083594505"
                          name="phoneNumber"
                          onChange={(e: any) => {
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
                      </GridItem>

                      <GridItem
                        mt={{ base: "16px", md: "unset" }}
                        colSpan={{ base: 2, md: 2 }}
                      >
                        <Box w="full">
                          <Text className={labelClasses}>Date of birth</Text>

                          <Box mt="4px" className="signup-date">
                            <DatePicker
                              placeholder="Select Date"
                              value={values?.dob}
                              onChange={(date: any) => {
                                setValues({ ...values, dob: date });
                              }}
                            />
                          </Box>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Flex>
                  <Flex
                    mt={6}
                    mb="35.5px"
                    // className="mt-6 flex space-x-2 mb-[35.5px]"
                  >
                    <Flex
                      align="center"
                      gap="2"
                      cursor="pointer"
                      onClick={() => {
                        setTandC((prev) => !prev);
                      }}
                    >
                      <Radio
                        bg="semiBlue"
                        size="sm"
                        border="1px solid rgba(36, 99, 235, 0.3)"
                        /* @ts-ignore */
                        value={tandC}
                        isChecked={tandC}
                        onClick={() => {
                          setTandC((prev) => !prev);
                        }}
                      />
                      <Text
                        fontSize="12px"
                        color="brandGray-300"
                        lineHeight="12px"
                      >
                        Accept our{" "}
                        <span style={{ fontWeight: 500 }}>
                          Terms and Conditions
                        </span>{" "}
                      </Text>
                    </Flex>
                  </Flex>
                  <Button
                    bg="#438950"
                    _hover={{ opacity: 0.8 }}
                    borderRadius="8px"
                    h="48px"
                    color="#fff"
                    isLoading={isLoading || isRent}
                    fontSize="14px"
                    fontWeight={500}
                    _active={{ bg: "#438950" }}
                    _focus={{ bg: "#438950" }}
                    w="full"
                    type="submit"
                    isDisabled={!isValid || !dirty || !tandC}
                  >
                    {buttonText}
                  </Button>{" "}
                </Form>
              )}
            </Formik>

            <Text textAlign="center" color="#444648" fontSize="12px" mt="32px">
              Already have an account ?{" "}
              <span
                style={{ fontWeight: 500, color: "#438950", cursor: "pointer" }}
                onClick={() => router.push("/login")}
              >
                Login
              </span>
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUpForm;
