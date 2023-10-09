import { createTheme } from "@mui/material";

export const textPrimary = "#08a6bb";

export const theme = createTheme({
  palette: {
    primary: {
      main: textPrimary,
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
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: "none",
          color: textPrimary,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
        },
      },
    },
  },
});
