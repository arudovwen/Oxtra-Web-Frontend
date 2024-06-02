import React from 'react';
import Typography from '@/components/constants/Typorgraphy';
import { topics } from '@/components/constants/arrays';

interface TopicsMobileProps {
  onSelectTopic: (topic: string) => void;
  selectedTopic: string;
}

const TopicsMobile = ({ onSelectTopic, selectedTopic }: TopicsMobileProps) => {
  return (
    <div className='lg:hidden'>
      <div className='flex  md:gap-[16px] mb-[40px] overflow-scroll md:overflow-auto'>
        {topics.map((topic, index) => (
          <div
            key={index}
            onClick={() => onSelectTopic(topic)}
            className={`py-[14px] no-wrap cursor-pointer rounded-[24px] px-[24px] ${
              selectedTopic === topic ? 'bg-brandGreen-300 text-white' : 'bg-white text-black'
            }`}
          >
            <Typography as='p' font='font-gordita-medium' className='font-bold'>
              {topic}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsMobile;
