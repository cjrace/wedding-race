import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
  Anchor,
} from "@mantine/core";
import PageShell from "../components/pageshell";
import "../styles/global.css";
import { Metadata } from "next";
import BackToTop from "@/components/backtotop";
import skip from "@/styles/skip.module.css";
import theme from "@/styles/theme";

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
        <MantineProvider
          theme={{ ...theme, primaryShade: 2 }} // Set in styles/theme.ts
          defaultColorScheme="dark"
        >
          <Anchor className={skip.skiplink} href="#main">
            Skip to main content
          </Anchor>
          <PageShell>
            <main id="main">{children}</main>
          </PageShell>
          <BackToTop />
        </MantineProvider>
      </body>
    </html>
  );
}
