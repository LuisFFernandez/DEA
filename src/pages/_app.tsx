// src/pages/_app.tsx

import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { MainLayout } from "@/layouts/layout";
import React, { useMemo } from "react";
import { NotificationProvider } from "@/components/providers/notificationProvider";

const Context = React.createContext({ name: "Default" });

function MyApp({ Component, pageProps }: AppProps) {
  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);
  return (
    <NotificationProvider>
      <Context.Provider value={contextValue}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Context.Provider>
    </NotificationProvider>
  );
}

export default MyApp;
