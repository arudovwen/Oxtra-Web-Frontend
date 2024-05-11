import React from "react";
import Container from "../../../layout/NonAuthLayout/Container";
import Typography from "../../constants/Typorgraphy";
import Image from "next/image";
import { trustedPartners } from "../../constants/arrays";


const TrustedPartners = ({ marginBottom }: { marginBottom: string }) => {
  return (
    <Container marginBottom={marginBottom}>
      <div className="relative text-center text-brandGray-300 border-t pt-[64px] lg:pt-20 border-[#B7DCBE]">
        <div  className=" mb-4">
          <Typography as="h3" font="font-gordita-bold">
            Trusted Partners
          </Typography>
        </div>
        <div className=" mb-[36px]">
          <Typography as="p" font="font-gordita-regular">
            The people we rely on to ensure you have a quality experience
            driving with us
          </Typography>
        </div>
        <div className="flex flex-wrap items-center gap-6 justify-center">
          {trustedPartners.map((trustedPartner) => {
            return (
              <span key={trustedPartner.partner}>
                <Image
                  src={trustedPartner.image}
                  alt={trustedPartner.partner}
                  width={136}
                  height={56}
                  className="h-auto"
                />
              </span>
            );
          })}
        </div>
     
      </div>
    </Container>
  );
};

export default TrustedPartners;
