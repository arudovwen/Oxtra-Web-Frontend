import Image from 'next/image';
import Container from '../Container';
import logo from '../../public/assets/Frame 2293.png';
import Link from 'next/link';
import Typography from '../Typography';
import classNames from 'classnames';

const navigation = {
  company: [
    { name: 'About us', href: '#' },
    { name: 'Company', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  products: [
    { name: 'Rent a car', href: '#' },
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

const headingClasses = classNames('text-brandGray-500 mb-4');

const Footer = () => {
  return (
    <footer className='pb-[80px]'>
      <Container>
        <div className='grid grid-cols-5 gap-[79px]'>
          <div className=''>
            <div>
              <Image
                src={logo}
                alt='logo'
                height={800}
                width={600}
                className='mb-4'
              />
            </div>

            <div className='text-brandGray-100 text-center'>
              <Typography as='xxxsmall' font='font-gordita-regular'>
                We are a team that is trying to reshape the transportation
                industry in Nigeria one step at a time. We hope to do a lot in
                the coming years with our ideas.
              </Typography>
            </div>
          </div>
          <div>
            <div className={headingClasses}>
              <Typography as='smallL' font='font-gordita-bold'>
                Company
              </Typography>
            </div>
            <ul>
              {navigation.company.map((item) => {
                return (
                  <li key={item.name} className='mb-4 text-brandGray-100'>
                    <Typography as='xsmall' font='font-gordita-regular'>
                      <Link href={item.href}> {item.name}</Link>
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className={headingClasses}>
              <Typography as='smallL' font='font-gordita-bold'>
                Products
              </Typography>
            </div>
            <ul>
              {navigation.products.map((item) => {
                return (
                  <li key={item.name} className='mb-4 text-brandGray-100'>
                    <Typography as='xsmall' font='font-gordita-regular'>
                      <Link href={item.href}> {item.name}</Link>
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className={headingClasses}>
              <Typography as='smallL' font='font-gordita-bold'>
                Business
              </Typography>
            </div>
            <ul>
              {navigation.business.map((item) => {
                return (
                  <li key={item.name} className='mb-4 text-brandGray-100'>
                    <Typography as='xsmall' font='font-gordita-regular'>
                      <Link href={item.href}> {item.name}</Link>
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className={headingClasses}>
              <Typography as='smallL' font='font-gordita-bold'>
                Contact us
              </Typography>
            </div>
            <ul>
              {navigation.contact.map((item) => {
                return (
                  <li key={item.name} className='mb-4 text-brandGray-100'>
                    <Typography as='xsmall' font='font-gordita-regular'>
                      <Link href={item.href}> {item.name}</Link>
                    </Typography>
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
