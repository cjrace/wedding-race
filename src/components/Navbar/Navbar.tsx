"use client";

import "@mantine/core/styles.css";
import React from "react";
import { AppShell, Burger, Text, Group, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";

export const pages = ["Home", "Accomodation", "Timeline", "FAQs"];

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  const renderPages = () =>
    pages.map((page) => (
      <UnstyledButton
        key={page}
        className={classes.control}
        component="a"
        href={page === "Home" ? "/" : `/${page.toLowerCase()}`}
        style={{ fontSize: "1.5rem", padding: "10px 20px" }}
      >
        {page}
      </UnstyledButton>
    ));

  return (
    <AppShell
      header={{
        height: { base: 60, xs: 60, sm: 100 },
      }}
      navbar={{
        width: 300,
        breakpoint: "xs",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group
            gap="md"
            justify="space-between"
            style={{ width: "100%", height: "60px" }}
            hiddenFrom="xs"
          >
            <Text style={{ textAlign: "center", fontWeight: 500, flex: 1 }}>
              Wedding Race
            </Text>
            <Burger opened={opened} onClick={toggle} size="sm" />
          </Group>
          <Group justify="center" style={{ flex: 1 }}>
            <Group ml="xl" gap={0} visibleFrom="xs">
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
