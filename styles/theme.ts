import { MantineThemeOverride, MantineColorsTuple } from "@mantine/core";

// This is generated from https://mantine.dev/colors-generator/?color=F9AA8E
export const myColor: MantineColorsTuple = [
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
  headings: {},
  components: {
    Text: {
      styles: {
        root: {
          padding: "10px 30px",
        },
      },
    },
    Title: {
      styles: {
        root: {
          padding: "10px 30px",
        },
      },
    },
    Anchor: {
      styles: {
        root: {
          color: myColor[2],
        },
      },
    },
    TextInput: {
      styles: {
        root: {
          padding: "5px 22px",
        },
      },
    },
    Button: {
      styles: {
        root: {
          backgroundColor: myColor[2],
          color: "#242424",
        },
      },
    },
  },
};

export default theme;
