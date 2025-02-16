"use client";

import "@mantine/core/styles.css";
import React from "react";
import { AppShell, Burger, Group, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { IconConfetti } from "@tabler/icons-react";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  const pages = ["Home", "Accomodation", "Timeline", "FAQs"];

  const renderPages = () =>
    pages.map((page) => (
      <UnstyledButton
        key={page}
        className={classes.control}
        component="a"
        href={page === "Home" ? "/" : `/${page.toLowerCase()}`}
      >
        {page}
      </UnstyledButton>
    ));

  return (
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
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="center" style={{ flex: 1 }}>
            <Group ml="xl" gap={0} visibleFrom="sm">
              {renderPages()}
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md">
        <Group align="center" justify="center" style={{ width: "100%" }}>
          {renderPages()}
        </Group>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
