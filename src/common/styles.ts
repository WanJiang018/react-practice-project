import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#08a6bb",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f5f5f5",
    },
  },
  typography: {
    allVariants: {
      color: "#6F7789",
    },
    fontFamily: ["Inter", "Noto Sans TC"].join(","),
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {},
    caption: {},
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
        },
      },
    },
  },
});
