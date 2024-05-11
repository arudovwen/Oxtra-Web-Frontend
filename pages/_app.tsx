import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/fonts.css";
import { AuthProvider } from "@/hooks/useAuth";
import { Toaster } from "react-hot-toast";
import { customTheme } from "../styles/theme";
import Fonts from "../styles/Fonts";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Pages from "@/layout/Pages";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: 600_000,
        retry: 0,
        refetchOnReconnect: true,
      },
    },
  });
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <AuthProvider>
      <ChakraProvider theme={customTheme}>
        <QueryClientProvider client={queryClient}>
          <Fonts />
          <Toaster position="top-right" />
          {/* @ts-ignore */}
          <Pages>
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </Pages>
        </QueryClientProvider>
      </ChakraProvider>
    </AuthProvider>
  );
}
