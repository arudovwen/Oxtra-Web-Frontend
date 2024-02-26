import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/fonts.css";
import { AuthProvider } from "@/hooks/useAuth";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </AuthProvider>
  );
}
