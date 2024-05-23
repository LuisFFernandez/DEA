import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { MainLayout } from "@/layouts/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
