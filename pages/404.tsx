// pages/404.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    const userValue = localStorage.getItem("user");

    if (!userValue || userValue === "null") {
      // Redirect to login page if user is not authenticated
      router.replace("/login");
    } else {
      // Redirect to dashboard if user is authenticated
      router.replace("/customer/rent-a-car/requests");
    }
  }, []);

  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const userValue = localStorage.getItem("user");
    setUser(userValue);

    if (userValue === null || userValue === "null" || !userValue) {
      router.replace("/login");
    } else {
      // @ts-ignore
      if (JSON.parse(localStorage.getItem("user"))?.user?.user_type === 1) {
        router.replace("/client/rentals");
      } else if (
        // @ts-ignore
        JSON.parse(localStorage.getItem("user"))?.user?.user_type === 0
      ) {
        router.replace("/customer/rent-a-car/requests");
      }
    }
  }, [router.pathname, user]);

  return null;
};

export default Custom404;
