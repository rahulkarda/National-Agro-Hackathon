import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "0",
  sm: "600px",
  md: "1024px",
  lg: "1280px",
  xl: "1440px",
};

const colors = {
  primary: "#4800C2",
  primaryLight: "#6835DA",
  background: "#F7F6FB",
  borderGray: "#CFCFCF",
  primeYellow: "#FFDA57",
  iconGray: "#B0B0B0",
  textGray: "#666666",
  textBlack: "#000000FF",
};

export const theme = extendTheme({
  colors,
  breakpoints,
  components: {
    Button: { baseStyle: { _focus: { boxShadow: "none", outline: "none" } } },
    Text: { baseStyle: { _focus: { boxShadow: "none", outline: "none" } } },
  },
});

export default theme;
