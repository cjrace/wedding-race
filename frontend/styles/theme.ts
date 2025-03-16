import { MantineThemeOverride, MantineColorsTuple } from "@mantine/core";

// This is generated from https://mantine.dev/colors-generator/?color=F9AA8E
const myColor: MantineColorsTuple = [
  "#ffeee6",
  "#ffdcd0",
  "#fab8a1",
  "#f6916d",
  "#f37042",
  "#f25b26",
  "#f25017",
  "#d8410b",
  "#c13807",
  "#a82d01",
];

const theme: MantineThemeOverride = {
  primaryColor: "myColor",
  colors: {
    myColor,
  },
  components: {
    Text: {
      styles: {
        root: {
          fontFamily: "Courier New",
          padding: "0 30px 0 30px",
        },
      },
    },
  },
};

export default theme;
