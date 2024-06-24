import React from "react";
import { tocMap } from "@/components/constants/arrays";

const TableOfContents = ({ selectedTopic }: { selectedTopic: string }) => {
  const toc = tocMap[selectedTopic] || [];

  return (
    <div className="border hidden lg:block h-full font gordita-regular rounded-[16px] border-solid px-[20px] py-[22px]  w-[496px]">
      <h2 className="text-sm text-brandGreen-400 font-semibold mb-[24px] ">
        Table of Contents
      </h2>
      <ul className="space-y-[24px]">
        {toc.map((item, index) => (
          <li key={index} className="text-[12px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
