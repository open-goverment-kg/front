import { createTheme, ThemeProvider } from "@mui/material";

const Themes = ({ children }) => {
  const mainTheme = createTheme({
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            width: "200px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            background: "#5aff3d",
            color: "#ff3d9b",
            "&:hover": {
              background: "#5aff3d99",
            },
          },
        },
      },
    },
  });
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
};

export default Themes;
