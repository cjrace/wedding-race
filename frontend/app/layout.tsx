import "@mantine/core/styles.css";
import React from "react";
import { mantineHtmlProps, MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import Navbar from "../components/navbar";
import "../styles/global.css";
import { ColorSchemeScript } from "@mantine/core";
import { Metadata } from "next";

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

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Navbar>{children}</Navbar>
        </MantineProvider>
      </body>
    </html>
  );
}
