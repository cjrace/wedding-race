"use client";

import { AppShell, Burger, Group, UnstyledButton, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../styles/pageshell.module.css";

export const pages = ["Home", "Accommodation", "Timeline", "FAQs"];

export default function PageShell({ children }: { children: React.ReactNode }) {
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
    <>
      <AppShell
        header={{
          height: { base: 60, xs: 60, sm: 100 },
        }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header zIndex={1}>
          <Group h="100%" px="md">
            <Group
              gap="md"
              justify="space-between"
              style={{ width: "100%", height: "60px" }}
              hiddenFrom="sm"
            >
              <Title
                style={{
                  textAlign: "center",
                  fontWeight: 500,
                  flex: 1,
                  fontSize: "1.5rem",
                  padding: "0 0 0 50px",
                }}
              >
                Wedding Race
              </Title>
              <Burger
                opened={opened}
                onClick={toggle}
                size="sm"
                aria-label="Show navigation"
              />
            </Group>
            <Group justify="center" style={{ flex: 1 }}>
              <Group ml="xl" gap={0} visibleFrom="sm">
                {renderPages()}
              </Group>
            </Group>
          </Group>
        </AppShell.Header>

        {/* TODO: Issue here with links still being navigable by keyboard, even when hidden */}
        <AppShell.Navbar py="md">
          <Group
            align="center"
            justify="space-between"
            style={{ width: "100%" }}
          >
            <Group align="center" justify="center">
              {renderPages()}
            </Group>
          </Group>
        </AppShell.Navbar>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
}
