import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const ThemesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = (): DefaultTheme => {
    return {
      breakpoints: ["400px", "700px", "1380px", "1440px", "1600px"],
      space: [0, 4, 8, 16, 32, 64],
      fontSizes: [12, 14, 16, 20, 24, 32],
      colors: {
        color_danger: "#c52525",
        color_white: "#FFFFFF",
        color_black: "#000000",
        color_1: "#CEBC88",
        color_2: "#DDA603",
        color_3: "#CCCDD1",
        color_4: "#5865F2",
        bg_1: "#0D1023",
        bg_2: "#000317",
        bg_3: "#DFFF2C",
        bg_4: "#1A262C",
        bg_5: "#7F818B",
        bg_6: "#BBBBBB",
        bg_7: "#676767",
        bg_8: "#8C8D8E",
      },
      fonts: [],
      fontWeights: [500, 600, 700, 800],
      lineHeights: [],
      letterSpacings: [],
      sizes: {
        widthLimit: "1200px",
      },
      borders: [],
      borderWidths: [],
      borderStyles: [],
      radii: [],
      shadows: [],
      zIndices: [],
    };
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemesProvider;
