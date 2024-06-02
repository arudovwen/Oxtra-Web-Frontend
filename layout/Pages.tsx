import { useEffect, useState } from 'react';
import AuthLayout from './PageLayout';
import NonAuthLayout from './NonAuthLayout';
import { useRouter } from 'next/router';

const Pages = ({ children }: any) => {
  const page = children.type.name.toLowerCase();
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const userValue = localStorage.getItem('user');
    /* @ts-ignore */
    setUser(userValue);
  }, [router.pathname]);

  return user === null || user === 'null' ? (
    <NonAuthLayout page={page}>{children}</NonAuthLayout>
  ) : (
    <AuthLayout>{children}</AuthLayout>
  );
};

export default Pages;
