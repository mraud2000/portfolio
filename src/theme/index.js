import { createTheme } from "@mui/material/styles";

const baseTypography = {
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  h1: { fontWeight: 700, letterSpacing: "-0.02em" },
  h2: { fontWeight: 700, letterSpacing: "-0.02em" },
  h3: { fontWeight: 600, letterSpacing: "-0.01em" },
  h4: { fontWeight: 600 },
  button: { textTransform: "none", fontWeight: 600 },
};

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: mode === "dark" ? "#7c9cff" : "#3b5bdb" },
      secondary: { main: "#f06595" },
      background:
        mode === "dark"
          ? { default: "#0b0d12", paper: "#13161d" }
          : { default: "#fafbfc", paper: "#ffffff" },
    },
    shape: { borderRadius: 12 },
    typography: baseTypography,
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 999, paddingInline: 20 },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: "saturate(180%) blur(12px)",
            backgroundImage: "none",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            transition: "transform .25s ease, box-shadow .25s ease",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          },
        },
      },
    },
  });
