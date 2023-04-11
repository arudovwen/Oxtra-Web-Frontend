import Image from 'next/image';
import Container from '../Container';
import logo from '../../public/assets/Frame 2293.png';
import Link from 'next/link';
import Typography from '../Typography';
import classNames from 'classnames';
import { GrTwitter, GrFacebook, GrInstagram } from 'react-icons/gr';

const navigation = {
  company: [
    { name: 'About us', href: '#' },
    { name: 'Company', href: '/company' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  products: [
    { name: 'Rent a car', href: '/rentVehicle' },
    { name: 'Put your car for rent', href: '#' },
    { name: 'Airport Trips', href: '#' },
    { name: 'Courier', href: '#' },
  ],
  business: [
    { name: 'Pricing', href: '#' },
    { name: 'Our Terms', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Insurance Policy', href: '#' },
  ],
  contact: [
    { name: 'Info@Oxtra.africa', href: '#' },
    { name: 'Whatsapp Support', href: '#' },
  ],
};

const socials = [
  {
    name: 'Facebook',
    icon: <GrFacebook />,
  },
  {
    name: 'Twitter',
    icon: <GrTwitter />,
  },
  {
    name: 'Instagram',
    icon: <GrInstagram />,
  },
];

const headingClasses = classNames('text-brandGray-500 mb-4');

const Footer = () => {
  return (
    <footer className='pb-[80px] '>
      <Container>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-x-[48px] gap-y-[48px]'>
          <div className='lg:col-span-2 lg:w-[74%]'>
            <Image
              src={logo}
              alt='logo'
              height={1200}
              width={800}
              className='mb-4'
            />

            <div className='text-brandGray-100 text-xs font-gordita-regular'>
              We&apos;re a team with a vision to transform the transportation
              industry in Lagos and Nigeria. We&apos;re dedicated to making
              meaningful progress one step at a time.
            </div>
          </div>
          <div>
            <div className={headingClasses}>
              <Typography as='h6' font='font-gordita-bold'>
                Company
              </Typography>
            </div>
            <ul>
              {navigation.company.map((item) => {
                return (
                  <li key={item.name} className='mb-4 text-brandGray-100'>
                    <Typography as='p' font='font-gordita-regular'>
                      <Link href={item.href}> {item.name}</Link>
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className={headingClasses}>
              <Typography as='h6' font='font-gordita-bold'>
                Products
              </Typography>
            </div>
            <ul>
              {navigation.products.map((item) => {
                return (
                  <li key={item.name} className='mb-4 text-brandGray-100'>
                    <Typography as='p' font='font-gordita-regular'>
                      <Link href={item.href}> {item.name}</Link>
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className={headingClasses}>
              <Typography as='h6' font='font-gordita-bold'>
                Business
              </Typography>
            </div>
            <ul>
              {navigation.business.map((item) => {
                return (
                  <li key={item.name} className='mb-4 text-brandGray-100'>
                    <Typography as='p' font='font-gordita-regular'>
                      <Link href={item.href}> {item.name}</Link>
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className={headingClasses}>
              <Typography as='h6' font='font-gordita-bold'>
                Contact us
              </Typography>
            </div>
            <ul>
              {navigation.contact.map((item) => {
                return (
                  <li key={item.name} className='mb-4 text-brandGray-100'>
                    <Typography as='p' font='font-gordita-regular'>
                      <Link href={item.href}> {item.name}</Link>
                    </Typography>
                  </li>
                );
              })}
            </ul>
            <ul className='flex gap-7'>
              {socials.map((item) => {
                return (
                  <li key={item.name} className='mb-4 text-brandGreen-300'>
                    {item.icon}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
