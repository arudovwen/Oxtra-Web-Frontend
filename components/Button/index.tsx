import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  bg?: string;
  hover: string;
  link?: string;
  children: React.ReactNode;
}

const buttonClasses = classNames(
  'duration-300 rounded px-[24px] py-[16px] text-xs '
);

//const blockClasses = classNames('w-full block');

const Button = ({ bg = '', hover, link = '', children }: Props) => {
  return (
    <button>
      <Link
        href={link}
        className={classNames(
          `${hover} ${buttonClasses} ${bg}`,
          bg === 'bg-white' && 'hover:text-brandGreen-100'
        )}
      >
        {children}
      </Link>
    </button>
  );
};

export default Button;
