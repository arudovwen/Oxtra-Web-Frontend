import React from "react";
import classNames from "classnames";
import Link from "next/link";

interface ButtonProps {
  bg?: string;
  hover: string;
  link?: string;
  children: React.ReactNode;
  textColor?: string;
  width: boolean;
  type?: "button" | "submit" | "reset";
  size: "text-base" | "text-sm";
  disable?: boolean;
}

const buttonClasses = classNames(
  "duration-300 rounded px-[24px]  py-[16px] font-gordita-medium",
);

const Button = ({
  bg = "",
  hover,
  link = "",
  children,
  textColor,
  width,
  type,
  size,
  disable,
}: ButtonProps) => {
  if (type) {
    return (
      <button
        disabled={disable}
        type={type}
        className={` ${width && "w-full"} ${disable && "cursor-no-drop"}`}
      >
        <a
          className={classNames(
            `${hover} ${buttonClasses} ${size} ${bg} w-full block ${textColor}`,
            hover === "hover:bg-brandGreen-300"
              ? "hover:text-white"
              : "hover:text-brandGray-300",
          )}
        >
          {children}
        </a>
      </button>
    );
  }
  return (
    <button className={`${width && "w-full"}`}>
      <Link
        href={link}
        className={classNames(
          `${hover} ${buttonClasses}  ${size} ${bg} w-full block ${textColor}`,
          hover === "hover:bg-brandGreen-300"
            ? "hover:text-white"
            : "hover:text-brandGray-300",
        )}
      >
        {children}
      </Link>
    </button>
  );
};

export default Button;
