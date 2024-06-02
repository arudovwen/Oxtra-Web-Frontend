import React from 'react';
import { useState } from 'react';
import Topics from '@/components/data/legal/topics';
import Content from '@/components/data/legal/content';
import TableOfContents from '@/components/data/legal/table-of-content';
import Container from '@/layout/NonAuthLayout/Container';
import Typography from '@/components/constants/Typorgraphy';
import TopicsMobile from '@/components/data/legal/topics-mobile';

const LegalCompliance = () => {
  const [selectedTopic, setSelectedTopic] = useState('Terms of Use');
  return (
    <Container>
      <div className=' text-brandGray-300 mb-[24px] mt-[64px] '>
        <Typography as='h3' font='font-gordita-ultra'>
          Legal and Compliance
        </Typography>
      </div>

      <div>
        <div className='flex flex-col   lg:flex-row lg:gap-[30px] '>
          <TopicsMobile onSelectTopic={setSelectedTopic} selectedTopic={selectedTopic} />
          <Topics onSelectTopic={setSelectedTopic} selectedTopic={selectedTopic} />
          <Content selectedTopic={selectedTopic} />
          <TableOfContents selectedTopic={selectedTopic} />
        </div>
      </div>
    </Container>
  );
};

export default LegalCompliance;
