import React from "react";
import Container from "../../layout/NonAuthLayout/Container";
import AlterFooter from "../../layout/NonAuthLayout/Footers/AlterFooter";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";

interface SendPackageLayoutProps {
  children: React.ReactNode;
  sendPackageLayoutActivePage: string;
}

const nav = [
  {
    name: "Sender Details",
  },
  {
    name: "Receiver Details",
  },
  {
    name: "Package",
  },
];

const SendPackageLayout = ({
  children,
  sendPackageLayoutActivePage,
}: SendPackageLayoutProps) => {
  const activePage = "Send a package";

  const router = useRouter();

  return (
    <div className="text-brandGray-500 h-screen flex flex-col ">
      <Container>
        <div className="relative mx-auto max-w-[500px] mt-[69px] mb-[49px] flex flex-col lg:flex-row gap-[15px]  justify-between lg:gap-0">
          {nav.map((n, index) => {
            return (
              <div
                key={n.name}
                className={`text-sm flex items-center gap-2 ${
                  sendPackageLayoutActivePage === n.name
                    ? "text-brandGreen-300 font-gordita-medium"
                    : "font-gordita-regular text-[#B3B3B3]"
                }`}
              >
                <span
                  className={`w-[32px]  h-[32px] rounded-full items-center text-white flex justify-center ${
                    sendPackageLayoutActivePage === n.name
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

export default SendPackageLayout;
