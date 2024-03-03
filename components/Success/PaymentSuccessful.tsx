import React from "react";
import Typography from "../Typography";
import paymentImage from "../../public/assets/Get-Started 1.png";
import Image from "next/image";
import Link from "next/link";

const PaymentSuccessful = () => {
  return (
    <div className="bg-brandGray-200 text-center flex flex-col items-center rounded-lg p-[20px] ">
      <Image src={paymentImage} width={196} height={196} alt="payment" />
      <div className="text-brandGray-300 mb-6">
        <Typography as="h6" font="font-gordita-medium">
          Your payment was successful
        </Typography>{" "}
      </div>
      <p className="text-[14px] leading-[21px] text-brandGray-100 mb-11">
        A confirmation email will be sent to you and final trip <br />{" "}
        information 2 hours before the trip
      </p>
      <Link
        href="/dashboard"
        className="text-brandGreen-300 text-[16px] leading-[16px] font-gordita-medium"
      >
        Proceed to Dashboard
      </Link>
    </div>
  );
};

export default PaymentSuccessful;
