import React from "react";
import { topics } from "@/components/constants/arrays";

interface TopicsProps {
  onSelectTopic: (topic: string) => void;
  selectedTopic: string;
}

const Topics = ({ onSelectTopic, selectedTopic }: TopicsProps) => {
  return (
    <div className="border hidden lg:block h-full font gordita-regular rounded-[16px] border-solid  p-[22px] w-[496px]">
      <h2 className="text-sm text-brandGreen-400 font-semibold mb-[24px] px-2">
        Topics
      </h2>
      <ul className="space-y-[24px]">
        {topics.map((topic, index) => (
          <li
            key={index}
            className={` text-sm cursor-pointer  px-2 ${selectedTopic === topic && "border-l-4 border-brandGreen-400 text-brandGreen-400 font-semibold"}`}
            onClick={() => onSelectTopic(topic)}
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
