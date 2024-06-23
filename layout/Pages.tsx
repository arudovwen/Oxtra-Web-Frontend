import { useEffect, useState } from 'react';
import NonAuthLayout from '../layout/NonAuthLayout';
import AuthLayout from './PageLayout';
import { useRouter } from 'next/router';
import { authRoutes, nonAuthRoutes } from '../utils/routes';

const Pages = ({ children }: any) => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();
  const page = children.type.name.toLowerCase();

  // useEffect(() => {
  //   const userValue = localStorage.getItem('user');
  //   setUser(userValue);

  //   const isAuthRoute = authRoutes.includes(router.pathname);
  //   const isNonAuthRoute = nonAuthRoutes.includes(router.pathname);

  //   if (userValue === null || userValue === 'null') {
  //     if (isAuthRoute) {
  //       // Redirect to login page if trying to access an auth route
  //       router.replace('/login');
  //     }
  //   } else {
  //     // User is authenticated
  //     if (isNonAuthRoute) {
  //       // Redirect to dashboard if trying to access a non-auth route
  //       router.replace('/dashboard/rent-a-car/requests');
  //     }
  //   }
  // }, [router.pathname]);

  // return user === null || user === "null" ? (
  //   // @ts-ignore
  //   <NonAuthLayout>{children}</NonAuthLayout>
  // ) : (
  //   // @ts-ignore
  //   <AuthLayout>{children}</AuthLayout>
  // );

  return (
    // @ts-ignore
    <NonAuthLayout page={page}>{children}</NonAuthLayout>
  );
};

export default Pages;
