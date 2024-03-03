import React, { useState } from "react";
import Typography from "../Typography";
import classNames from "classnames";
import Button from "../Button";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { cookiesExpiry } from "@/helpers/url_helpers";

const labelClasses = classNames(
  "block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300",
);

const inputClasses = classNames(
  `px-2  h-[40px] py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`,
);

const SenderDetialsForm = () => {
  const router = useRouter();

  const [sender_name, setSenderName] = useState("");
  const [general_location, setGeneralLocation] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [sender_email, setSenderEmail] = useState("");
  const [pickup_address, setPickupAddress] = useState("");
  const [sender_state, setSenderState] = useState("");
  const [sender_city, setSenderCity] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const senderDetails = {
      sender_name,
      general_location,
      phone_number,
      sender_email,
      pickup_address,
      sender_state,
      sender_city,
    };

    Cookies.set("senderDetails", JSON.stringify(senderDetails), {
      expires: cookiesExpiry,
    });

    router.push("/send-a-package/receiver");
  };

  return (
    <main className="w-[90%] md:w-[39%] ">
      <div className="mb-4 text-brandGray-300">
        <Typography as="h4" font="font-gordita-medium">
          Sender details
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
            <div className="col-span-full md:col-span-6">
              <label htmlFor="expiration-date" className={labelClasses}>
                Sender name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  placeholder=" Sender name"
                  className={inputClasses}
                  onChange={(e) => setSenderName(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-full md:col-span-6">
              <label htmlFor="cvc" className={labelClasses}>
                General location
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  placeholder="General location"
                  className={inputClasses}
                  onChange={(e) => setGeneralLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="card-number" className={labelClasses}>
                Phone number
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  required
                  className={inputClasses}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="" className={labelClasses}>
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email-address"
                  required
                  name="email-address"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  className={inputClasses}
                  onChange={(e) => setSenderEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="card-number" className={labelClasses}>
                Pick up address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="Enter your address"
                  onChange={(e) => setPickupAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-6 md:col-span-6">
              <label htmlFor="expiration-date" className={labelClasses}>
                State
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className={inputClasses}
                  onChange={(e) => setSenderState(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-6 md:col-span-6">
              <label htmlFor="city" className={labelClasses}>
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className={inputClasses}
                  onChange={(e) => setSenderCity(e.target.value)}
                />
              </div>
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

export default SenderDetialsForm;
