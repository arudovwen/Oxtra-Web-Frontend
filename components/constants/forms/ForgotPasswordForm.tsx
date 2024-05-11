import React from "react";
import Typography from "../Typorgraphy";
import Button from "../Button";
import classNames from "classnames";
import { useState } from "react";
import { forgotPassword, handleCsrf } from "@/services/authservices";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import Loader from "../Loader";
import { SyntheticEvent } from "react";

const labelClasses = classNames(
  "block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300",
);

const inputClasses = classNames(
  `px-2 py-2 border  border-[#d4d6d8] rounded-lg my-3  w-full font-gordita-regular`,
);

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const { disable, setDisable } = useAuth();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setDisable(true);

    const user = {
      email,
    };

    forgotPassword(user)
      .then((res) => {
        setDisable(false);
      })
      .catch((err) => {
        console.log(err);

        setDisable(false);
      });

    // setDisable(false);
  };

  return (
    <main className="w-[90%] lg:mx-auto lg:max-w-[500px]">
      <div className="mb-4 mt-[40px] text-brandGray-300">
        <Typography as="h4" font="font-gordita-medium">
          Forgot Password?
        </Typography>
      </div>
      <div className="text-brandGray-100 mb-8">
        <p className="font-gordita-regular text-[16px]">
          Not to worry, just enter your email address and we will send you an
          email to reset your password.
        </p>
      </div>

      <section className="flex w-full flex-col">
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-y-6">
            <div className="col-span-full">
              <label htmlFor="" className={labelClasses}>
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClasses}
                  required
                />
              </div>
            </div>
          </div>

          <Button
            bg={!disable ? "bg-brandGreen-300" : "bg-brandGreen-100"}
            hover="hover:bg-brandGray-200"
            textColor="text-white"
            width={true}
            size="text-sm"
            type="submit"
            disable={disable}
          >
            {!disable ? (
              "Reset Password"
            ) : (
              <Loader type="spin" width={14} height={14} color="#42864F" />
            )}
          </Button>
          <div className="text-center mt-[32px]">
            <span className="text-[12px] text-brandGray-300 leading-[12px] font-gordita-medium">
              Go back to{" "}
              <Link href="/login" className="text-brandGreen-300 ">
                Login
              </Link>
            </span>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ForgotPasswordForm;
