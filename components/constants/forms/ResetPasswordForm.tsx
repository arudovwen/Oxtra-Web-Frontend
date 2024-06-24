import React, { useState } from "react";
import classNames from "classnames";
import { Form, Formik } from "formik";
import { resetPassValue, validatePassSchema } from "@/helpers/validations";
import AuthInput from "../AuthInput";
import { Box, Button, Flex, Radio, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useCustomToast from "@/utils/notifications";
import { useResetPassword } from "@/services/query/auth";

const labelClasses = classNames(
  "text-[12px] leading-[12px] font-gordita-bold text-[#444648]",
);

const ResetPasswordForm = () => {
  const router = useRouter();
  const { token } = router.query;

  const { successToast, errorToast } = useCustomToast();

  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;

    const validations = {
      length: newPassword.length >= 8,
      uppercase: /[A-Z]/.test(newPassword),
      lowercase: /[a-z]/.test(newPassword),
      number: /\d/.test(newPassword),
      specialChar: /[!@#\$%\^&]/.test(newPassword),
    };

    setPasswordValidations(validations);
  };

  const { mutate, isLoading } = useResetPassword({
    onSuccess: (res: any) => {
      successToast(res?.message);
      router.push("/login");
    },
    onError: (err: any) => {
      errorToast(
        err?.response?.data?.message || err?.message || "An Error occurred",
      );
    },
  });

  const handleSubmit = (values = "") => {
    mutate({
      token,
      // @ts-ignore
      ...values,
    });
  };

  const [show, setShow] = useState(false);
  const [showNew, setShowNew] = useState(false);

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
              Reset Password?
            </Text>
            <Text color="#646668" mt="5px">
              You requested for a password reset. Please enter a new password
              and confirm.
            </Text>
          </Box>

          <Box w="full" maxW="500px" mt="32px">
            <Formik
              /* @ts-ignore */
              onSubmit={handleSubmit}
              initialValues={resetPassValue}
              validationSchema={validatePassSchema}
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
                      <Text className={labelClasses}>Enter new password</Text>

                      <AuthInput
                        placeholder="Enter password"
                        value={values?.password}
                        onChange={(e: any) => {
                          handlePasswordChange(e);
                          handleChange(e);
                        }}
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

                    <Box>
                      <Text className={labelClasses}>Confirm new password</Text>

                      <AuthInput
                        placeholder="Enter password"
                        value={values?.password_confirmation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="password_confirmation"
                        error={
                          errors?.password_confirmation &&
                          touched?.password_confirmation &&
                          errors?.password_confirmation
                        }
                        onClick={() => setShowNew((prev) => !prev)}
                        password={showNew ? false : true}
                        show
                        type={showNew ? "text" : "password"}
                      />
                    </Box>
                  </Flex>
                  <Box mt="22px" mb="32px">
                    <Flex align="flex-start" gap="8px">
                      <Radio
                        isChecked={passwordValidations.length}
                        isReadOnly
                        bg="semiBlue"
                        size="sm"
                        border="1px solid rgba(36, 99, 235, 0.3)"
                      />
                      <Text color="#4e4e4e" fontSize="10px" fontWeight={500}>
                        Be at least 8 characters or more
                      </Text>
                    </Flex>

                    <Flex align="flex-start" mt="8px" gap="8px">
                      <Radio
                        isChecked={
                          passwordValidations.uppercase &&
                          passwordValidations.lowercase &&
                          passwordValidations.number &&
                          passwordValidations.specialChar
                        }
                        isReadOnly
                        bg="semiBlue"
                        size="sm"
                        border="1px solid rgba(36, 99, 235, 0.3)"
                      />
                      <Text color="#4e4e4e" fontSize="10px" fontWeight={500}>
                        Password must include an UPPERCASE, a number and special
                        character (e.g: !@#$%&*?)
                      </Text>
                    </Flex>
                  </Box>
                  <Button
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
              I did not make this request{" "}
              <span className="text-brandGreen-300 ">Report here</span>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ResetPasswordForm;
