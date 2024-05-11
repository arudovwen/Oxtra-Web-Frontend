import React from "react";
import Typography from "../../constants/Typorgraphy";
import classNames from "classnames";
import Button from "../../constants/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const labelClasses = classNames(
  "block text-[14px] leading-[14px] font-gordita-medium text-brandGray-300",
);

const inputClasses = classNames(
  `px-2  h-[40px] py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full font-gordita-regular`,
);

const LeaseCarSignUp = () => {
  const [enterPasswordHidden, setEnterPasswordHidden] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register-car/vehicle");
  };

  return (
    <main className="w-[90%] md:w-[39%] ">
      <div className="mb-4 text-brandGray-300">
        <Typography as="h4" font="font-gordita-medium">
          Sign up to lease your car
        </Typography>
      </div>
      <div className="text-brandGray-100 mb-8">
        <Typography as="p" font="font-gordita-regular">
          Please enter the required details to get started
        </Typography>
      </div>

      <section className="flex-auto">
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-y-6 gap-x-4">
            <div className="col-span-full md:col-span-6">
              <label htmlFor="expiration-date" className={labelClasses}>
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  placeholder="First name"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="col-span-full md:col-span-6">
              <label htmlFor="cvc" className={labelClasses}>
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="card-number" className={labelClasses}>
                Phone number
              </label>
              <div className="mt-1">
                <input type="number" required className={inputClasses} />
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
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="" className={labelClasses}>
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={`${enterPasswordHidden ? "password" : "text"}`}
                  placeholder="Enter password"
                  className={inputClasses}
                />

                {enterPasswordHidden ? (
                  <AiOutlineEye
                    className="absolute top-[24px] right-[12px]"
                    onClick={() => setEnterPasswordHidden(!enterPasswordHidden)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute top-[24px] right-[12px]"
                    onClick={() => setEnterPasswordHidden(!enterPasswordHidden)}
                  />
                )}
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="card-number" className={labelClasses}>
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="Enter your residential address"
                />
              </div>
            </div>

            <div className="col-span-6 md:col-span-6">
              <label htmlFor="expiration-date" className={labelClasses}>
                State
              </label>
              <div className="mt-1">
                <input type="text" required className={inputClasses} />
              </div>
            </div>

            <div className="col-span-6 md:col-span-6">
              <label htmlFor="city" className={labelClasses}>
                City
              </label>
              <div className="mt-1">
                <input type="text" required className={inputClasses} />
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-2 mb-[35.5px]">
            <div className="flex h-5 gap-2 items-center">
              <input
                id="same-as-shipping"
                name="same-as-shipping"
                type="checkbox"
                className=""
                required
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

export default LeaseCarSignUp;
