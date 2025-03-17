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
import Script from "next/script";

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
        <meta name="apple-mobile-web-app-title" content="Wedding Race" />
        <link rel="icon" type="image/png" href="/favicon.svg" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider
          theme={{ ...theme, primaryShade: 2 }} // Set in styles/theme.ts
          defaultColorScheme="dark"
        >
          <Script
            async
            data-trigger="custom"
            src="https://run.confettipage.com/here.js"
            data-confetticode="U2FsdGVkX19hqXvA5xDZGLUX5pXbgNb7SHMLuraP0kEzX8uFVYqhVb+hP/+F9GkweHs8Slm0GHBP34GJVUuhc0qkJYegqvMS4DwhBDKDKtMKsA4/ImHeT4U1Tpi0H1jkiYWHvbdIj3/cxt7EZC9WTGhrNI45OWW7j6ve5Kel42BfCTt0woX/Q0VkMkJQsccZgzT0QqyIdz4CLCW2WJHwj6KCMzvEtRU62XuLEVD0AnsnMxgnq5GVF45G2JRrQPxZrqUEVnGkHYNoauI2FYoUx0nprRdX/WudKWRtse84Q9ugjSfpdlCp7KZh4jBPdjn/xuM48aBki6ajgjNwSjcrY1V2tdpcRiIzH8NX6Hmrm4drp+nAA8X8XwVdnPyjYYsa/TVEnwcR1T+vy9VAwxTJl/hfLOQukheSKnbz4RBGzcKwnvo29VstD04PK73AR43WO6/PB8r1g6gf6NzVxBx4HGI5kKboYdOym2oUnP+Q9U3h0RSM6RVMCUIWooNnL1qY7Rz6j8pMDLYtQUkb1t2Ly9tk4m+gi+8wJNz3Czf+gMe73Ni4AufZACHjlJ5zKta3QcMjbYfVrMP2sYIEyGnwGZjwtMp8LMBcZDVjszuJ8NXMiYmeke60skmro+ebis1eFl/tBQKbXR/ZiEl8WIuyXPqswPsotoW2u3t7YNmeK678NhUBMSWkIIr/EmkTZTUJK1g4xphqqUa3uVhSmNYIipKQlPJe66QWNit8a2S5MuFpHAM0bPKTUmvuVhNNqM9m"
          ></Script>
          <Anchor
            className={skip.skiplink}
            href="#main"
            style={{ color: "#242424" }}
          >
            Skip to main content
          </Anchor>
          <PageShell>
            <div id="main">{children}</div>
          </PageShell>
          <BackToTop />
        </MantineProvider>
      </body>
    </html>
  );
}
