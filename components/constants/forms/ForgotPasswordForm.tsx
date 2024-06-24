import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import AuthInput from "../AuthInput";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useCustomToast from "@/utils/notifications";
import { useForgotPassword } from "@/services/query/auth";

const labelClasses = classNames(
  "text-[12px] leading-[12px] font-gordita-bold text-[#444648]",
);

const ForgotPasswordForm = () => {
  const router = useRouter();

  const { successToast, errorToast } = useCustomToast();

  const { mutate, isLoading } = useForgotPassword({
    onSuccess: (res: any) => {
      successToast(res?.message);
    },
    onError: (err: any) => {
      errorToast(
        err?.response?.data?.message || err?.message || "An Error occurred",
      );
    },
  });

  const handleSubmit = (values: any) => {
    mutate(values);
  };

  return (
    <Box fontFamily="gordita" w={{ base: "95%", md: "100%" }}>
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
              Forgot Password?
            </Text>

            <Text color="#646668" mt="5px">
              Not to worry, just enter your email address and we will send you
              an email to reset your password.
            </Text>
          </Box>

          <Box w="full" maxW="500px" mt="32px">
            <Formik
              /* @ts-ignore */
              onSubmit={handleSubmit}
              initialValues={{ email: "" }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email().required("Email is required"),
              })}
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
                  </Flex>
                  <Button
                    mt="32px"
                    bg="#438950"
                    _hover={{ opacity: 0.8 }}
                    borderRadius="8px"
                    h="48px"
                    color="#fff"
                    fontSize="14px"
                    fontWeight={500}
                    isLoading={isLoading}
                    w="full"
                    type="submit"
                    _active={{ bg: "#438950" }}
                    _focus={{ bg: "#438950" }}
                    isDisabled={!isValid || !dirty}
                  >
                    Reset Password
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
              Go back to{" "}
              <Link href="/login" className="text-brandGreen-300 ">
                Login
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ForgotPasswordForm;
