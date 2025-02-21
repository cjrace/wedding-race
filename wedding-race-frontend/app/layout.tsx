import "@mantine/core/styles.css";
import React from "react";
import { mantineHtmlProps, MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import Navbar from "../components/Navbar/Navbar";
import "../styles/global.css";

export const metadata = {
  title: "Wedding Race",
  description: "The wedding of the Race's!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Navbar>{children}</Navbar>
        </MantineProvider>
      </body>
    </html>
  );
}
