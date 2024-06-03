import Navigation from './Navigation';
import Container from './Container';

const NonAuthLayout = ({ children, page }: any) => {
  return (
    <div className=''>
      <div className={`${page === 'home' ? 'bg-custom-gradient' : 'bg-white'}`}>
        <Container className='relative'>
          <Navigation
            color={`${page === 'home' ? 'text-white' : 'text-brandGray-300'}`}
            hover='hover:text-brandGreen-100'
            buttonBg={`${page === 'home' ? 'bg-white' : 'bg-brandGreen-300'}`}
            buttonHover='hover:bg-brandGreen-300'
            buttonText={`${page === 'home' ? 'text-brandGray-300' : 'text-white'}`}
            activePage={page}
            navBackground='green'
            menuColor={`${page === 'Home' ? 'text-white' : 'text-brandGreen-300'}`}
            page={page}
          />
        </Container>
      </div>
      {children}
    </div>
  );
};

export default NonAuthLayout;
