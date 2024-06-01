import React from 'react';
import { contentMap } from '@/components/constants/arrays';

const Content = ({ selectedTopic }: { selectedTopic: string }) => {
  return (
    <div className='border prose  w-full font-gordita-regular rounded-[16px] border-solid  p-[22px]'>
      <h2 className='text-sm text-brandGreen-400 font-semibold mb-[24px]'>{selectedTopic}</h2>

      <p>{contentMap[selectedTopic].content}</p>
    </div>
  );
};

export default Content;
