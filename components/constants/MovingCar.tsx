import React from "react";
import Marquee from "react-fast-marquee";
import car from "../../public/assets/marqucar.webp";
import Image from "next/image";

const MovingCar = () => {
  return (
    <Marquee direction="right">
      <Image
        src={car}
        alt="come and experience"
        className="object-cover hidden lg:block h-auto"
        width={100}
        height={50}
      />
    </Marquee>
  );
};

export default MovingCar;
