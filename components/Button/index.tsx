import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  bg?: string;
  hover: string;
  link?: string;
  children: React.ReactNode;
  textColor?: string;
  width: boolean;
}

const buttonClasses = classNames(
  'duration-300 rounded px-[24px]  py-[16px] text-xs '
);

const Button = ({
  bg = '',
  hover,
  link = '',
  children,
  textColor,
  width,
}: Props) => {
  return (
    <button className={`${width && 'w-full'}`}>
      <Link
        href={link}
        className={classNames(
          `${hover} ${buttonClasses} ${bg} w-full block ${textColor}`,
          hover === 'hover:bg-brandGreen-300'
            ? 'hover:text-white'
            : 'hover:text-brandGray-300'
        )}
      >
        {children}
      </Link>
    </button>
  );
};

export default Button;
