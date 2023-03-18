import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  bg?: string;
  hover: string;
  link?: string;
  children: React.ReactNode;
  textColor?: string;
}

const buttonClasses = classNames(
  'duration-300 rounded px-[24px] py-[16px] text-xs '
);

//const blockClasses = classNames('w-full block');

const Button = ({ bg = '', hover, link = '', children, textColor }: Props) => {
  return (
    <button>
      <Link
        href={link}
        className={classNames(
          `${hover} ${buttonClasses} ${bg} block ${textColor}`,
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
