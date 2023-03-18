import React from 'react';
import Container from '../Container';
import Typography from '../Typography';
import veriftyme from '../../public/assets/verifyme.png';
import wooven from '../../public/assets/wooven.png';
import fidelity from '../../public/assets/fidelity.png';
import credpal from '../../public/assets/credpal.png';
import Image from 'next/image';

const trustedPartners = [
  {
    partner: 'verfiy me',
    image: veriftyme,
  },
  { partner: 'wooven', image: wooven },
  { partner: 'fidelity', image: fidelity },
  { partner: 'credpal', image: credpal },
];

const TrustedPartners = () => {
  return (
    <Container>
      <div className='text-center mb-[124px]'>
        <div className='text-brandGray-300 mb-6'>
          <Typography as='h2' font='font-gordita-bold'>
            Trusted Partners
          </Typography>
        </div>
        <div className='text-brandGray-400 mb-[46px]'>
          <Typography as='xsmall' font='font-gordita-regular'>
            The people we rely on to ensure you have a quality experience
            driving with us
          </Typography>
        </div>
        <div className='flex items-center gap-[72px] justify-center'>
          {trustedPartners.map((trustedPartner) => {
            return (
              <div key={trustedPartner.partner}>
                <Image
                  src={trustedPartner.image}
                  alt={trustedPartner.partner}
                  width={206}
                  height={56}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default TrustedPartners;
