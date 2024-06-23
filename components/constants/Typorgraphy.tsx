import React from "react";

type Type = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

const VARIANT_Styles: Record<Type, string> = {
  h1: "text-4xl md:text-5xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
  h5: "text-lg md:text-xl",
  h6: "text-base md:text-lg",
  p: "text-xs md:text-base",
};
type Font =
  | "font-gordita-regular"
  | "font-gordita-thin"
  | "font-gordita-light"
  | "font-gordita-medium"
  | "font-gordita-bold"
  | "font-gordita-black"
  | "font-gordita-ultra";

type Transforms = "none" | "capitalize" | "uppercase" | "lowercase";

const VARIANT_Transforms: Record<Transforms, string> = {
  none: "inherit",
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase",
};

interface Props {
  children: React.ReactNode;
  as?: Type;
  looksLike?: Type;
  font?: Font;
  transform?: Transforms;
  className?: string;
}

const Typography = ({
  children,
  as = "p",
  looksLike = as,
  font,
  transform = "none",
  className,
}: Props) => {
  const TagName = as as keyof JSX.IntrinsicElements;
  return (
    <TagName
      className={`
        ${VARIANT_Styles[looksLike]}
        ${VARIANT_Transforms[transform]}
        ${font} ${className}
      `}
    >
      {/* @ts-ignore */}
      {children}
    </TagName>
  );
};

export default Typography;
