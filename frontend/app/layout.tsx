import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import Navbar from "../components/navbar";
import "../styles/global.css";
import { Metadata } from "next";
import BackToTop from "@/components/backtotop";

export const metadata: Metadata = {
  title: {
    template: "%s | Wedding Race",
    default: "Wedding Race",
  },
  description: "All the details about the wedding of the Race's!",
  openGraph: {
    title: "Wedding Race",
    description: "All the details about the wedding of the Race's!",
    type: "website",
    url: "https://www.wedding-race.co.uk",
    siteName: "Wedding Race",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Navbar>
            <main id="main">{children}</main>
          </Navbar>
          <BackToTop />
        </MantineProvider>
      </body>
    </html>
  );
}
