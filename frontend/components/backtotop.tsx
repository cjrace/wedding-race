"use client";

import { useWindowScroll } from "@mantine/hooks";
import { Button, Transition, rem, Affix, Text } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";

const BackToTop: React.FC = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            leftSection={
              <IconArrowUp
                style={{ width: rem(16), height: rem(16), color: "#242424" }}
              />
            }
            style={{ ...transitionStyles, color: "#242424" }}
            onClick={() => scrollTo({ y: 0 })}
          >
            <Text style={{ padding: 0 }}>Back to top</Text>
          </Button>
        )}
      </Transition>
    </Affix>
  );
};

export default BackToTop;
