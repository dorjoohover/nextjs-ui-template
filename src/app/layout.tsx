import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { logoMiniWhite } from "@/utils/assets";

import StoreProvider from "./_providers";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Eunit - Монголын зарын сайт",
    template: "Eunit | %s",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={logoMiniWhite} type="image/png" sizes="32x32" />
      </head>
      <body>
        {/* <ChakraProvider theme={theme} cssVarsRoot={undefined}> */}
        {/* <Navbar /> */}

        <StoreProvider>{children}</StoreProvider>
        {/* </ChakraProvider> */}
      </body>
    </html>
  );
}
