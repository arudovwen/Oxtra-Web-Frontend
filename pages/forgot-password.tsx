import Navigation from "@/components/Navigation";
import Container from "@/components/Container";
import React from "react";
import LoginForm from "@/components/Forms/LoginForm";
import AlterFooter from "@/components/Footers/AlterFooter";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import ForgotPasswordForm from "@/components/Forms/ForgotPasswordForm";

const ForgotPassword = () => {
  const activePage = "Forgot password";
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    user ? router.push("/") : router.push("/forgot-password");
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
        <ForgotPasswordForm />
      </div>

      <AlterFooter />
    </div>
  );
};

export default ForgotPassword;
