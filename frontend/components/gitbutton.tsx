import { UnstyledButton, Tooltip } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import classes from "../styles/navbar.module.css";

export default function GitButton({ testId }: { testId?: string }) {
  return (
    <Tooltip label="Source code (opens in new tab)">
      <UnstyledButton
        data-testid={testId || "github-button"}
        component="a"
        className={classes.control}
        href="https://github.com/cjrace/wedding-race"
        aria-label="Open GitHub repository in a new tab"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "1.5rem",
          padding: "10px 20px",
          transform: "translateY(5px)",
        }}
      >
        <IconBrandGithub size={30} />
      </UnstyledButton>
    </Tooltip>
  );
}
