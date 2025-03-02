import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
  Anchor,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";
import Navbar from "../components/navbar";
import "../styles/global.css";
import { Metadata } from "next";
import BackToTop from "@/components/backtotop";
import skip from "@/styles/skip.module.css";

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

// This is generated from https://mantine.dev/colors-generator/?color=F9AA8E
const myColor: MantineColorsTuple = [
  "#ffeee6",
  "#ffdcd0",
  "#fab8a1",
  "#f6916d",
  "#f37042",
  "#f25b26",
  "#f25017",
  "#d8410b",
  "#c13807",
  "#a82d01",
];

const theme = createTheme({
  primaryColor: "myColor",
  colors: {
    myColor,
  },
});

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
        <MantineProvider
          theme={{ ...theme, primaryShade: 2 }}
          defaultColorScheme="dark"
        >
          <Anchor className={skip.skiplink} href="#main">
            Skip to main content
          </Anchor>
          <Navbar>
            <main id="main">{children}</main>
          </Navbar>
          <BackToTop />
        </MantineProvider>
      </body>
    </html>
  );
}
