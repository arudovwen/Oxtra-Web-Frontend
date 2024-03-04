import React from "react";
import Navigation from "@/layout/NonAuthLayout/Navigation";
import Container from "@/layout/NonAuthLayout/Container";
import AlterFooter from "@/layout/NonAuthLayout/Footers/AlterFooter";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import ResetPasswordForm from "@/components/constants/forms/ResetPasswordForm";

const ResetPassword = () => {
  const activePage = "Reset password";
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    user ? router.push("/") : router.push("/reset-password");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="h-screen flex flex-col">
      <Container>
        <Navigation
          color="text-brandGray-300"
          hover="hover:text-brandGreen-300"
          buttonBg="bg-brandGreen-300"
          buttonText="text-white"
          buttonHover="hover:bg-white"
          activePage={activePage}
          navBackground="white"
          menuColor="text-brandGreen-300"
        />{" "}
      </Container>

      <div className="flex-1 flex justify-center items-center">
        <ResetPasswordForm />
      </div>

      <AlterFooter />
    </div>
  );
};

export default ResetPassword;
