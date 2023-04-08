// unihack theme colors

export const tokens = () => ({
  primary: {
    100: "#fff0d7",
    200: "#ffe0af",
    300: "#ffd188",
    400: "#ffc160",
    500: "#ffb238",
    600: "#cc8e2d",
    700: "#996b22",
    800: "#664716",
    900: "#33240b",
  },
  pinkAccent: {
    100: "#eddbd8",
    200: "#dbb7b1",
    300: "#c8948b",
    400: "#b67064",
    500: "#a44c3d",
    600: "#833d31",
    700: "#622e25",
    800: "#421e18",
    900: "#210f0c",
  },
  whiteAccent: {
    100: "#fcfdfc",
    200: "#fafcfa",
    300: "#f7faf7",
    400: "#f5f9f5",
    500: "#f2f7f2",
    600: "#c2c6c2",
    700: "#919491",
    800: "#616361",
    900: "#303130",
  },
  blueAccent: {
    100: "#d1d4d8",
    200: "#a4a8b1",
    300: "#767d89",
    400: "#495162",
    500: "#1b263b",
    600: "#161e2f",
    700: "#101723",
    800: "#0b0f18",
    900: "#05080c",
  },
  greenAccent: {
    100: "#dbdfd2",
    200: "#b7bea5",
    300: "#929e77",
    400: "#6e7d4a",
    500: "#4a5d1d",
    600: "#3b4a17",
    700: "#2c3811",
    800: "#1e250c",
    900: "#0f1306",
  },
});

// mui theme settings
export const themeSettings = () => {
  const colors = tokens();

  return {
    palette: {
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.pinkAccent[500],
      },
      neutral: {
        dark: colors.whiteAccent[700],
        main: colors.whiteAccent[500],
        light: colors.whiteAccent[100],
      },
      background: {
        default: colors.primary[500],
      },
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Anton", "sans-serif"].join(","),
        fontSize: 130,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 36,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    breakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
  };
};
