const themeColors = (mode) => {
  return {
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
  };
};

export default themeColors;
