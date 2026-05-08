"use client";

import { Grid } from "@mantine/core";
import OverlayCard from "@/components/overlaycard";
import PizzaOven from "@/public/images/pizza-oven.png";
import GetReadyHut from "@/public/images/get-ready-hut.png";
import BreakfastShack from "@/public/images/breakfast-shack.png";

export default function OverlayCardGrid() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <OverlayCard
          cardKey="pizzaOven"
          image={PizzaOven}
          overlay="At the pre-wedding village party we'll be serving
                    freshly made pizzas from our oven, hot and delicious!"
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <OverlayCard
          cardKey="gettingReady"
          image={GetReadyHut}
          overlay="The pods all have plenty of space but for something more
                    sociable you can get ready together in the makeup hut!"
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <OverlayCard
          cardKey="breakfastShack"
          image={BreakfastShack}
          overlay="Self-serve breakfast will be available for everyone staying
                    at the wedding village."
        />
      </Grid.Col>
    </Grid>
  );
}
