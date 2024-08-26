import Navigation from "./Navigation";
import Container from "./Container";
import { useRouter } from "next/router";

const NonAuthLayout = ({ children, page }: any) => {
  const { pathname } = useRouter();

  return (
    <div className="">
      <div
        className={`${pathname === "/" ? "bg-custom-gradient" : "bg-white border-b border-gray-100"} `}
      >
        <Container className="relative">
          <Navigation
            color={`${pathname === "/" ? "text-white" : "text-brandGray-300"}`}
            hover="hover:text-brandGreen-200"
            buttonBg={`${pathname === "/" ? "bg-white" : "bg-brandGreen-300"}`}
            buttonHover="hover:bg-brandGreen-300"
            buttonText={`${pathname === "/" ? "text-brandGray-300" : "text-white"}`}
            activePage={page}
            navBackground="green"
            menuColor={`${pathname === "/" ? "text-white" : "text-brandGreen-300"}`}
            page={page}
          />
        </Container>
      </div>
      {children}
    </div>
  );
};

export default NonAuthLayout;
