import React from "react";
import ReactLoading from "react-loading";
import { LoadingType } from "react-loading";

interface LoadingProps {
  type: LoadingType;
  color: string;
  height: number;
  width: number;
}

const Loading = ({ type, color, height, width }: LoadingProps) => (
  <div className="flex items-center justify-center">
    {/* @ts-ignore */}
    <ReactLoading type={type} color={color} height={height} width={width} />
  </div>
);

export default Loading;
