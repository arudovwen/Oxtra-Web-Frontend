import React from 'react';
import Container from '@/layout/NonAuthLayout/Container';
import Typography from '@/components/constants/Typorgraphy';
import Button from '@/components/constants/Button';
import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';
import bubble from '../../../public/assets/bubble.png';
import Questions from './questions';
import Image from 'next/image';
import { category } from '@/components/constants/arrays';

const Faq = () => {
  const [index, setIndex] = useState(0);
  const [openQuestions, setOpenQuestions] = useState<{ [key: number]: boolean }>({});

  const handleToggle = (questionIndex: number) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [questionIndex]: !prev[questionIndex],
    }));
  };

  return (
    <div>
      <Container
        marginBottom='mb-[120px]'
        className='xl:items-center justify-between flex-col flex  xl:flex-row pt-[40px] md:pt-[200px]'
      >
        <div>
          <div className=' text-brandGray-300 mb-[16px]'>
            <Typography as='h3' font='font-gordita-ultra'>
              Frequently Asked Questions
            </Typography>
          </div>

          <div className='mb-[21px] font-gordita-regular text-[16px] text-brandGray-300 leading-[21px]'>
            We are here to answer any questions you may have
          </div>

          <div className='flex  md:gap-[16px] mb-[40px] overflow-scroll min-[500px]:overflow-visible'>
            {category.map((category) => (
              <div
                key={category.name}
                onClick={() => setIndex(category.id)}
                className={`py-[14px] no-wrap cursor-pointer rounded-[24px] px-[24px] shadow-md ${
                  category.id === index ? 'bg-brandGreen-300 text-white' : 'bg-white text-black'
                }`}
              >
                <Typography as='p' font='font-gordita-medium' className='font-bold'>
                  {category.name}
                </Typography>
              </div>
            ))}
          </div>

          {category[index].questions.map((question, i) => (
            <Questions
              key={i}
              question={question}
              isOpen={!!openQuestions[i]}
              handleToggle={() => handleToggle(i)}
            />
          ))}
        </div>
        <div className='w-[371px]  py-[24px] px-[20px] border rounded-[16px] border-[#DADADA]'>
          <div className='mb-[20px]'>
            <Image src={bubble} alt='bubble' width={92} height={80} />
          </div>
          <div className='md:text-[20px] mb-[20px] leading-[30px] font-gordita-medium'>
            Got more questions?
          </div>

          <div className='mb-[21px]  font-gordita-regular text-[14px] text-brandGray-300 leading-[21px]'>
            We have answered most of the questions you may have but if you have any others or
            concerns, you can reach us 24/7 via our dedicated{' '}
            <span className='font-black'>Support Team</span>
          </div>
          <Button
            data-aos='fade-up'
            data-aos-duration='700'
            data-aos-once='true'
            bg='bg-brandGreen-300'
            hover='hover:bg-brandGray-200'
            textColor='text-white'
            width={false}
            size='text-sm'
          >
            <div className='flex items-center gap-4'>
              <span>Chat with support</span>
              <span>
                <BsArrowRight />
              </span>
            </div>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
