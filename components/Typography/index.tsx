import React from 'react';

type Type =
  | 'h1'
  | 'h2'
  | 'h2L'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'p2'
  | 'small'
  | 'xsmall'
  | 'xsmallL'
  | 'xxsmall';

const VARIANT_Styles: Record<Type, string> = {
  h1: 'text-5xl',
  h2: 'text-4xl',
  h2L: 'text-4xlL',
  h3: 'text-3xl',
  h4: 'text-2xl',
  h5: 'text-xl',
  h6: 'text-lg',
  p: 'text-base',
  p2: 'text-base2',
  small: 'text-sm',
  xsmall: 'text-xs',
  xsmallL: 'text-xsL',
  xxsmall: 'text-xxs',
};
type Font =
  | 'font-gordita-regular'
  | 'font-gordita-thin'
  | 'font-gordita-light'
  | 'font-gordita-medium'
  | 'font-gordita-bold'
  | 'font-gordita-black'
  | 'font-gordita-ultra';

type Transforms = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

const VARIANT_Transforms: Record<Transforms, string> = {
  none: 'inherit',
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
};

interface Props {
  children: React.ReactNode;
  as?: Type;
  looksLike?: Type;
  font?: Font;
  transform?: Transforms;
}

const Typography = ({
  children,
  as = 'p',
  looksLike = as,
  font,
  transform = 'none',
}: Props) => {
  const TagName = as as keyof JSX.IntrinsicElements;
  return (
    <TagName
      className={`
        ${VARIANT_Styles[looksLike]}
        ${VARIANT_Transforms[transform]}
        ${font}
      `}
    >
      {children}
    </TagName>
  );
};

export default Typography;
