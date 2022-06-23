import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#1db954",
      light: "#1ed760",
      dark: "#3b5249",
      contrastText: "#ffffff",
    },
    background: {
      default: "#95A14A",
      paper: "#6A7738",
    },
    text: {
      primary: "#222B13",
      secondary: "#C5CC5E",
    },
    divider: "#222B13",
  },
});
