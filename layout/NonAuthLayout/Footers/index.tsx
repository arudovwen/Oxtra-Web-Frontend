import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import Typography from "../../../components/constants/Typorgraphy";
import classNames from "classnames";
import { navigation, socials } from "@/components/constants/arrays";
import logoGreen from "../../../public/assets/oxtra logo-8.png";

const headingClasses = classNames("text-[#242628] mb-4");

const Footer = () => {
  return (
    <footer className="pb-6">
      <Container>
        <div className="flex gap-y-8 lg:gap-y-0 md:gap-x-16  flex-col lg:flex-row">
          <div className="w-full max-w-[400px] lg:max-w-[340px] ">
            <Image
              src={logoGreen}
              alt="logo"
              height={120}
              width={150}
              className="mb-4 h-auto"
            />

            <div className="text-brandGray-100 text-sm font-gordita-regular leading-normal mb-[16px]">
            We are a tech-mobility company providing sustainable transportation solutions in Africa's urban cities

            </div>
            <div className="hidden lg:block text-brandGray-100 text-xs font-gordita-regular leading-normal">
              ©2024 Oxtra Limited. All Rights Reserved.{" "}
              <span className="font-black text-black">RC 1891082</span>
            </div>
           
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2  gap-y-6 lg:gap-y-0 lg:gap-x-5 lg:flex gap-x-6 justify-between">
            <div>
              <div className={headingClasses}>
                <Typography
                  as="h6"
                  font="font-gordita-bold"
                  className="!text-sm text-[#242628]"
                >
                  Company
                </Typography>
              </div>
              <ul>
                {navigation.company.map((item) => {
                  return (
                    <li key={item.name} className="mb-3 text-brandGray-100">
                      <Typography
                        as="p"
                        font="font-gordita-regular"
                        className="!text-sm"
                      >
                        <Link href={item.href}> {item.name}</Link>
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className={headingClasses}>
                <Typography
                  as="h6"
                  font="font-gordita-bold"
                  className="!text-sm text-[#242628]"
                >
                  Products
                </Typography>
              </div>
              <ul>
                {navigation.products.map((item) => {
                  return (
                    <li key={item.name} className="mb-3 text-brandGray-100">
                      <Typography
                        as="p"
                        font="font-gordita-regular"
                        className="!text-sm"
                      >
                        <Link href={item.href}> {item.name}</Link>
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className={headingClasses}>
                <Typography
                  as="h6"
                  font="font-gordita-bold"
                  className="!text-sm text-[#242628]"
                >
                  Business
                </Typography>
              </div>
              <ul>
                {navigation.business.map((item) => {
                  return (
                    <li
                      key={item.name}
                      className="mb-3 text-brandGray-100 no-wrap"
                    >
                      <Typography
                        as="p"
                        font="font-gordita-regular"
                        className="!text-sm"
                      >
                        <Link href={item.href}> {item.name} </Link>
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className={headingClasses}>
                <Typography
                  as="h6"
                  font="font-gordita-bold"
                  className="!text-sm text-[#242628]"
                >
                  Contact us
                </Typography>
              </div>
              <ul>
                {navigation.contact.map((item) => {
                  return (
                    <div
                      key={item.title}
                      className="mb-3 flex gap-2 items-center  no-wrap text-[#444444]"
                    >
                      <Typography
                        as="h6"
                        font="font-gordita-bold"
                        className="!text-sm text-[#444444]"
                      >
                        {item.title}:
                      </Typography>

                      <Typography
                        as="p"
                        font="font-gordita-regular"
                        className="!text-sm"
                      >
                        {item.name}
                      </Typography>
                    </div>
                  );
                })}
              </ul>
              <Typography
                as="h6"
                font="font-gordita-bold"
                className="!text-sm mb-[16px] text-[#444444]"
              >
                Social Media
              </Typography>
              <ul className="flex gap-x-6">
                {socials.map((item) => {
                  return (
                    <li key={item.name} className="mb-3">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="lg:hidden text-brandGray-100 text-xs font-gordita-regular leading-normal">
              ©2024 Oxtra Limited. All Rights Reserved.{" "}
              <span className="font-black text-black">RC 1891082</span>
            </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
