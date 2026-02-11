import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a5f7a",
    },
    secondary: {
      main: "#2563eb",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
  },
});

export default theme;
