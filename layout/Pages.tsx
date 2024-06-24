import { useEffect, useState } from "react";
import NonAuthLayout from "../layout/NonAuthLayout";
import AuthLayout from "./PageLayout";
import { useRouter } from "next/router";
import { customerRoutes, clientRoutes, nonAuthRoutes } from "../utils/routes";

const Pages = ({ children }: any) => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();
  const page = children.type.name.toLowerCase();
  useEffect(() => {
    const userValue = localStorage.getItem("user");
    // @ts-ignore
    const user = JSON.parse(userValue);
    setUser(userValue);

    const isCustomerRoute = customerRoutes.includes(router.pathname);
    const isClientRoute = clientRoutes.includes(router.pathname);
    const isNonAuthRoute = nonAuthRoutes.includes(router.pathname);
    const userType = user?.user?.user_type;

    if (!user) {
      if (isCustomerRoute) {
        router.replace("/login");
      }
    } else if (userType === 1) {
      if (isCustomerRoute || isNonAuthRoute) {
        router.replace("/client/rentals");
      }
    } else if (userType === 0) {
      if (isClientRoute || isNonAuthRoute) {
        router.replace("/customer/rent-a-car/requests");
      }
    }
  }, [router.pathname, user]);

  return user === null || user === "null" ? (
    // @ts-ignore
    <NonAuthLayout page={page}>{children}</NonAuthLayout>
  ) : (
    // @ts-ignore
    <AuthLayout>{children}</AuthLayout>
  );
};

export default Pages;
