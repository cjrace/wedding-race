import "@mantine/core/styles.css";
import React from "react";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { theme } from "../theme";
import Navbar from "../components/Navbar/Navbar";
import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Wedding Race",
  description: "The wedding of the Race's!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Analytics />
        <MantineProvider theme={theme}>
          <Navbar>{children}</Navbar>
        </MantineProvider>
      </body>
    </html>
  );
}
