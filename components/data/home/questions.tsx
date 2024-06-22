import React from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

interface QuestionProps {
  question: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  handleToggle: () => void;
}

const Questions = ({ question, isOpen, handleToggle }: QuestionProps) => {
  return (
    <div className="bg-white shadow-lg lg:w-[781px] mb-[16px] px-[24px] py-[26px] rounded-[8px]">
      <div className="flex justify-between">
        <div className="md:text-[20px] leading-[30px] font-gordita-medium">
          {question.question}
        </div>

        <div onClick={handleToggle} className="cursor-pointer">
          {isOpen ? (
            <FiMinusCircle className="w-[24px] h-[24px]" />
          ) : (
            <FiPlusCircle className="w-[24px] h-[24px]" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="mb-[21px] font-gordita-regular mt-[20px] text-[16px] text-brandGray-300 leading-[21px]">
          {question.answer}
        </div>
      )}
    </div>
  );
};

export default Questions;
