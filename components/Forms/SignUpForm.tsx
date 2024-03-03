import React, { useEffect } from "react";
import classNames from "classnames";
import { useState } from "react";
import Select from "react-select";
import { useRouter } from "next/router";
import DatePicker from "react-multi-date-picker";
import { formatNewDate } from "@/helpers/helpers";
import { IoIosArrowDown } from "react-icons/io";
import { Form, Formik } from "formik";
import {
  initSignupValues,
  validationSignupSchema,
} from "@/helpers/validations";
import AuthInput from "../constants/AuthInput";
import { countries } from "../constants/arrays";
import { Button, Grid, GridItem, Radio } from "@chakra-ui/react";
import Pick_Return from "../constants/Pick_Return";

const labelClasses = classNames(
  "text-[12px] leading-[12px] font-gordita-bold text-[#444648]",
);

const SignUpForm = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const [startValue, startChange] = useState("");
  const startDate = formatNewDate(startValue);
  const startDateRange = new Date();

  const [tandC, setTandC] = useState(false);
  const [checkout, setCheckout] = useState(null);

  useEffect(() => {
    const checkoutValue = localStorage.getItem("checkout");
    /* @ts-ignore */
    setCheckout(checkoutValue);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values = "") => {
    if (checkout) {
      setIsLoading(true);
      {
        setTimeout(() => {
          setIsLoading(false);
          router.push("/checkout");
        }, 2000);
      }
    } else {
      /* @ts-ignore */
      const { code, phone, ...rest } = values;
      const phoneNumber = code?.value + Number(phone);
      console.log({
        ...rest,
        phone: phoneNumber,
        code: code?.value,
        dob: startDate,
      });
    }
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
    <main className="px-[10px]">
      <div
        className={`${
          checkout === "checkout" ? "flex" : "hidden"
        } mt-[50px] md:mt-[30px]`}
      >
        <Pick_Return />
      </div>

      <div className="mt-[30px]">
        <div className="text-center mb-[20px] text-[#444648] font-gordita-bold text-[24px]">
          Sign up
        </div>
      </div>

      <section className="flex-auto w-[100%] lg:mx-auto lg:max-w-[500px]">
        <Formik
          /* @ts-ignore */
          onSubmit={handleSubmit}
          initialValues={initSignupValues}
          validationSchema={validationSignupSchema}
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
              <div className="flex flex-col gap-y-[20px] gap-x-4">
                <div className="col-span-full">
                  <label htmlFor="email-address" className={labelClasses}>
                    Full name
                  </label>
                  <div>
                    <AuthInput
                      placeholder="Enter your full name"
                      name="fullName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.fullName}
                      error={
                        errors?.fullName &&
                        touched?.fullName &&
                        errors?.fullName
                      }
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="" className={labelClasses}>
                    Email address
                  </label>
                  <div>
                    <AuthInput
                      placeholder="Enter your email address"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.email}
                      error={errors?.email && touched?.email && errors?.email}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="email-address" className={labelClasses}>
                    Enter password
                  </label>
                  <div className="relative">
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
                  </div>
                </div>

                <Grid
                  templateColumns={{
                    base: "repeat(2,1fr)",
                    md: "repeat(7,1fr)",
                  }}
                  columnGap="16px"
                  w="full"
                >
                  <GridItem colSpan={{ base: 1, md: 2 }}>
                    <label htmlFor="expiration-date" className={labelClasses}>
                      Phone code
                    </label>
                    <div className="mt-[5px]">
                      <Select
                        styles={customStyles}
                        placeholder="+234"
                        /* @ts-ignore */
                        options={codeOption}
                        value={values?.code}
                        defaultValue={values?.code}
                        onChange={(selectionOption) =>
                          setValues({
                            ...values,
                            /* @ts-ignore */
                            code: selectionOption,
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
                  </GridItem>

                  <GridItem colSpan={{ base: 1, md: 3 }}>
                    <label htmlFor="expiration-date" className={labelClasses}>
                      Phone number
                    </label>
                    <div>
                      <AuthInput
                        placeholder="08083594505"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.phone}
                        error={errors?.phone && touched?.phone && errors?.phone}
                      />
                    </div>
                  </GridItem>

                  <GridItem colSpan={{ base: 2, md: 2 }}>
                    <div className="w-full">
                      <label htmlFor="pick up Date" className={labelClasses}>
                        Date of birth
                      </label>

                      <div className="signup-date font-gordita-regular mt-[4px]">
                        <DatePicker
                          placeholder="Select Date"
                          value={startValue}
                          minDate={startDateRange}
                          onChange={(date: any) => {
                            startChange(date);
                          }}
                        />
                      </div>
                    </div>
                  </GridItem>
                </Grid>
              </div>
              <div className="mt-6 flex space-x-2 mb-[35.5px]">
                <div
                  onClick={() => {
                    setTandC((prev) => !prev);
                  }}
                  className="cursor-pointer flex gap-2 items-center"
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
                  <p className="text-[12px] text-brandGray-300 leading-[12px] font-gordita-regular">
                    Accept our{" "}
                    <span className="font-gordita-medium">
                      Terms and Conditions
                    </span>{" "}
                  </p>
                </div>
              </div>
              <Button
                bg="#438950"
                _hover={{ opacity: 0.8 }}
                borderRadius="8px"
                h="48px"
                color="#fff"
                isLoading={isLoading}
                fontSize="14px"
                fontWeight={500}
                _active={{ bg: "#438950" }}
                _focus={{ bg: "#438950" }}
                w="full"
                type="submit"
                isDisabled={!isValid || !dirty || !startValue || !tandC}
              >
                {buttonText}
              </Button>{" "}
            </Form>
          )}
        </Formik>

        <div className="mt-[32px] text-center text-[12px] text-[#444648]">
          Already have an account ?{" "}
          <span
            className="font-gordita-medium text-[#438950] cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </div>
      </section>
    </main>
  );
};

export default SignUpForm;
