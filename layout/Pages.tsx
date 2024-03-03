import { useEffect, useState } from "react";
import AuthLayout from "./PageLayout";
import { useRouter } from "next/router";

const Pages = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userValue = localStorage.getItem("user");
    /* @ts-ignore */
    setUser(userValue);
  }, [router.pathname]);

  return user === null || user === "null" ? (
    <>{children}</>
  ) : (
    <AuthLayout>{children}</AuthLayout>
  );
};

export default Pages;
