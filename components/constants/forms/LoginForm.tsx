import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { Form, Formik } from "formik";
import { initLoginValues, validationLoginSchema } from "@/helpers/validations";
import AuthInput from "../AuthInput";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Pick_Return from "../Pick_Return";
import { useRouter } from "next/router";
import useCustomToast from "@/utils/notifications";
import { useLogin } from "@/services/query/auth";
import { formatt, formatTime } from "@/helpers/helpers";
import { useRentCar } from "@/services/query/rent";

const labelClasses = classNames(
  "text-[12px] leading-[12px] font-gordita-bold text-[#444648]",
);

const LoginForm = () => {
  const [checkout, setCheckout] = useState(null);
  const router = useRouter();
  const [rentValues, setRentValues] = useState({});

  useEffect(() => {
    const checkoutValue = localStorage.getItem("checkout");
    /* @ts-ignore */
    const rent_values = JSON.parse(sessionStorage.getItem("rent-values"));
    setRentValues(rent_values);
    /* @ts-ignore */
    setCheckout(checkoutValue);
  }, []);

  const { successToast, errorToast } = useCustomToast();

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

  const { mutate, isLoading } = useLogin({
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
    mutate(values);
  };

  const [show, setShow] = useState(false);

  const buttonText = checkout !== null ? "Login and Pay" : "Login";

  return (
    <Box fontFamily="gordita" w={{ base: "95%", md: "100%" }}>
      <Box
        mt={{ base: "50px", md: "unset" }}
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
            <Text color="#444648" fontWeight={700} fontSize="24px">
              Login
            </Text>
            <Text color="#646668" mt="5px">
              Please enter your details to proceed
            </Text>
          </Box>

          <Box w="full" maxW="500px" mt="32px">
            <Formik
              /* @ts-ignore */
              onSubmit={handleSubmit}
              initialValues={initLoginValues}
              validationSchema={validationLoginSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
                dirty,
              }) => (
                /* @ts-ignore */
                <Form onSubmit={handleSubmit}>
                  <Flex flexDirection="column" rowGap={6}>
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
                  </Flex>
                  <Box textAlign="end" mt="22px" mb="32px">
                    <Link
                      href="/forgot-password"
                      className="text-[12px] leading-[12px] text-black font-gordita-medium"
                    >
                      Forgot Password?
                    </Link>
                  </Box>
                  <Button
                    bg="#438950"
                    _hover={{ opacity: 0.8 }}
                    borderRadius="8px"
                    h="48px"
                    color="#fff"
                    fontSize="14px"
                    fontWeight={500}
                    isLoading={isLoading || isRent}
                    w="full"
                    type="submit"
                    _active={{ bg: "#438950" }}
                    _focus={{ bg: "#438950" }}
                    isDisabled={!isValid || !dirty}
                  >
                    {buttonText}
                  </Button>{" "}
                </Form>
              )}
            </Formik>
            <Box
              fontSize="12px"
              color="brandGray-300"
              lineHeight="12px"
              fontWeight={500}
              textAlign="center"
              mt="32px"
            >
              Don't have an account?{" "}
              <Link href="/signup" className="text-brandGreen-300 ">
                Sign up
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default LoginForm;
