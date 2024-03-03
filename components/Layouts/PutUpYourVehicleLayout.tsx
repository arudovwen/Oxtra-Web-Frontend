import React from "react";
import Navigation from "../Navigation";
import Container from "../Container";
import AlterFooter from "../Footers/AlterFooter";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";

interface PutUpYourVehicleLayoutProps {
  children: React.ReactNode;
  putYourVehicleLayoutActivePage: string;
}

const nav = [
  {
    name: "Basic information",
  },
  {
    name: "Vehicle",
  },
  {
    name: "Documents",
  },
];

const PutUpYourVehicleLayout = ({
  children,
  putYourVehicleLayoutActivePage,
}: PutUpYourVehicleLayoutProps) => {
  const activePage = "Sign up as a car owner";

  const router = useRouter();

  return (
    <div className="text-brandGray-500 h-screen flex flex-col ">
      <Container>
        <Navigation
          color="text-brandGray-300"
          hover="hover:text-brandGreen-300"
          buttonBg="bg-brandGreen-300"
          buttonText="text-white"
          buttonHover="hover:bg-white"
          activePage={activePage}
          navBackground="white"
          menuColor="text-brandGreen-300"
        />

        <div className="relative mx-auto max-w-[500px] mt-[69px] mb-[49px] flex flex-col lg:flex-row gap-[15px]  justify-between lg:gap-0">
          {nav.map((n, index) => {
            return (
              <div
                key={n.name}
                className={`text-sm flex items-center gap-2 ${
                  putYourVehicleLayoutActivePage === n.name
                    ? "text-brandGreen-300 font-gordita-medium"
                    : "font-gordita-regular text-[#B3B3B3]"
                }`}
              >
                <span
                  className={`w-[32px]  h-[32px] rounded-full items-center text-white flex justify-center ${
                    putYourVehicleLayoutActivePage === n.name
                      ? "bg-brandGreen-300"
                      : "bg-[#B3B3B3]"
                  }`}
                >
                  {index + 1}
                </span>{" "}
                <span>{n.name}</span>
              </div>
            );
          })}
          <span
            className="absolute cursor-pointer left-[-195px] text-sm font-gordita-medium flex items-center gap-2"
            onClick={() => router.back()}
          >
            <AiOutlineArrowLeft className="text-brandGray-500  w-[22px] h-[22px]" />
            Back
          </span>
        </div>
      </Container>
      <div className="flex-1 flex items-center justify-center"> {children}</div>

      <AlterFooter />
    </div>
  );
};

export default PutUpYourVehicleLayout;
