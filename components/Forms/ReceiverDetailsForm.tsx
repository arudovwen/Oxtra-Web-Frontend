import React from "react";
import Typography from "../Typography";
import classNames from "classnames";
import Button from "../Button";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { cookiesExpiry } from "@/helpers/url_helpers";

const labelClasses = classNames(
  "block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300",
);

const inputClasses = classNames(
  `px-2  h-[40px] py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`,
);

const ReceiverDetailsForm = () => {
  const router = useRouter();

  const [receiver_name, setReceiverName] = useState("");
  const [receiver_phone_number, setReceiverPhoneNumber] = useState("");
  const [receiver_email, setReceiverEmail] = useState("");
  const [receiver_state, setReceiverState] = useState("");
  const [receiver_address, setReceiverAddress] = useState("");
  const [receiver_city, setReceiverCity] = useState("");
  const [delivery_landmark, setDeliveryLandmark] = useState("");
  const [delivery_date, setDeliveryDate] = useState("");
  const [sender, setSender] = useState({});

  useEffect(() => {
    const senderDetails = Cookies.get("senderDetails");
    if (senderDetails) {
      const parsedData = JSON.parse(senderDetails as string);
      setSender(parsedData);
    } else {
      router.push("/send-a-package");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const senderAndReceiverDetails = {
      ...sender,
      receiver_name,
      receiver_phone_number,
      receiver_email,
      receiver_state,
      receiver_address,
      receiver_city,
      delivery_landmark,
      delivery_date,
    };

    Cookies.set(
      "senderAndReceiverDetails",
      JSON.stringify(senderAndReceiverDetails),
      {
        expires: cookiesExpiry,
      },
    );

    router.push("/send-a-package/package");
  };

  return (
    <main className="w-[90%] md:w-[39%] ">
      <div className="mb-4 text-brandGray-300">
        <Typography as="h4" font="font-gordita-medium">
          Receiver details
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
                Receiver name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  placeholder=" Receiver name"
                  className={inputClasses}
                  onChange={(e) => setReceiverName(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-full md:col-span-6">
              <label htmlFor="card-number" className={labelClasses}>
                Phone number
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  required
                  className={inputClasses}
                  onChange={(e) => setReceiverPhoneNumber(e.target.value)}
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
                  onChange={(e) => setReceiverEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label className={labelClasses}>Delivery address</label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="Enter address"
                  onChange={(e) => setReceiverAddress(e.target.value)}
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
                  onChange={(e) => setReceiverState(e.target.value)}
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
                  onChange={(e) => setReceiverCity(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-6 md:col-span-6">
              <label htmlFor="expiration-date" className={labelClasses}>
                Delivery landmark
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className={inputClasses}
                  onChange={(e) => setDeliveryLandmark(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-6 md:col-span-6">
              <label htmlFor="city" className={labelClasses}>
                Delivery date
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  className={`${inputClasses}  uppercase`}
                  required
                  onChange={(e) => setDeliveryDate(e.target.value)}
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

export default ReceiverDetailsForm;
