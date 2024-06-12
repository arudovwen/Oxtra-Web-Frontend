// pages/404.js
import { useEffect } from "react";
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
      router.replace("/dashboard/rent-a-car");
    }
  }, []);

  return null;
};

export default Custom404;
