import { createTheme } from "@mui/material";
import React, { useState, useMemo } from "react";

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function MyThemeProvider({ children }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const customTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: "#e66c0f",
                  light: "#f7fbfc",
                  dark: "#294753",
                  contrastText: "#fff",
                },
              }
            : {
                primary: {
                  main: "#0076a5",
                  light: "#f7fbfc",
                  dark: "#164a5f",
                  contrastText: "#fff",
                },
              }),
        },
        components: {
          MuiSlider: {
            styleOverrides: {
              markLabel: {
                color: "#bdbdbd",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export { MyThemeProvider, ColorModeContext };
