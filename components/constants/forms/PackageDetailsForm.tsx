import React from "react";
import Typography from "../Typorgraphy";
import classNames from "classnames";
import Button from "../Button";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const labelClasses = classNames(
  "block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300",
);

const inputClasses = classNames(
  `px-2  h-[40px] py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`,
);

const PackageDetailsForm = () => {
  const router = useRouter();

  useEffect(() => {
    const senderAndReceiverDetails = Cookies.get("senderAndReceiverDetails");
    if (senderAndReceiverDetails) {
      const parsedData = JSON.parse(senderAndReceiverDetails as string);
      // setSender(parsedData);
    } else {
      router.push("/send-a-package");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/send-a-package/package");
  };

  return (
    <main className="w-[90%] md:w-[39%] ">
      <div className="mb-4 text-brandGray-300">
        <Typography as="h4" font="font-gordita-medium">
          Package details
        </Typography>
      </div>
      <div className="text-brandGray-100 mb-8">
        <Typography as="p" font="font-gordita-regular">
          Please enter the required details to get started
        </Typography>
      </div>

      <section className="flex-auto">
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-y-6 gap-x-4 mb-8">
            <div className="col-span-full">
              <label htmlFor="" className={labelClasses}>
                Package description
              </label>
              <div className="mt-1">
                <input type="text" required className={inputClasses} />
              </div>
            </div>

            <div className="col-span-6 md:col-span-6">
              <label htmlFor="expiration-date" className={labelClasses}>
                Package type
              </label>
              <div className="mt-1">
                <input type="text" required className={inputClasses} />
              </div>
            </div>

            <div className="col-span-6 md:col-span-6">
              <label htmlFor="city" className={labelClasses}>
                Is it fragile?
              </label>
              <div className="mt-1">
                <input type="text" required className={inputClasses} />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="card-number" className={labelClasses}>
                What is the size of the budget
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="Enter your address"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-2 mb-[35.5px]">
            <div className="flex h-5 gap-2 items-center">
              <input
                id="same-as-shipping"
                name="same-as-shipping"
                type="checkbox"
                required
                className=""
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
            bg="bg-brandGreen-300"
            hover="hover:bg-brandGray-200"
            textColor="text-white"
            width={true}
            type="submit"
            size="text-base"
          >
            Next
          </Button>
        </form>
      </section>
    </main>
  );
};

export default PackageDetailsForm;
