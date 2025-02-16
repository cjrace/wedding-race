'use client';

import "@mantine/core/styles.css";
import React from "react";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
  AppShell,
  Burger,
  Group,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./navbar.module.css";
import { theme } from "../theme";
import { IconConfetti } from "@tabler/icons-react";



/*
export const metadata = {
  title: "Wedding Race",
  description: "The wedding of the Race's!",
};
*/

export default function RootLayout({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();

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
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { desktop: true, mobile: !opened },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Group justify="space-between" style={{ flex: 1 }}>
                  <IconConfetti size={30} />
                  <Group ml="xl" gap={0} visibleFrom="sm">
                    <UnstyledButton className={classes.control}>
                      Home
                    </UnstyledButton>
                    <UnstyledButton className={classes.control}>
                      Accomodation
                    </UnstyledButton>
                    <UnstyledButton className={classes.control}>
                      Travel
                    </UnstyledButton>
                    <UnstyledButton className={classes.control}>
                      Support
                    </UnstyledButton>
                  </Group>
                </Group>
              </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
              <UnstyledButton className={classes.control}>Home</UnstyledButton>
              <UnstyledButton className={classes.control}>Accomodation</UnstyledButton>
              <UnstyledButton className={classes.control}>
                Travel
              </UnstyledButton>
              <UnstyledButton className={classes.control}>Support</UnstyledButton>
            </AppShell.Navbar>

            <AppShell.Main>
              {children}
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
