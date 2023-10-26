import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import Header from "./Header";
import coffees from "../data/coffeesList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { increaseBy5, increaseBy20, increaseBy50 } from "../redux/reducers/counterReducer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CoffeeCard from "./CoffeeCard";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function AppCompents() {
  const dispatch = useDispatch<AppDispatch>();
  const handleIncrement = (caffeineQuantity: number) => {
    
    switch (caffeineQuantity) {
      case 5: dispatch(increaseBy5());
        break;
      case 20: dispatch(increaseBy20());
        break;
      case 50: dispatch(increaseBy50());
        break;
      default: console.log("Invalid caffeine quantity");
        break;
    }
    
  };

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode == "light"
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
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <GlobalStyles
            styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
          />
          <CssBaseline />
          <Header />
          {/* Hero unit */}
          <Container
            disableGutters
            maxWidth="sm"
            component="main"
            sx={{ pt: 6, pb: 6 }}
          >
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              component="p"
            >
              You need a break, and you deserve it ! Let's pick up the coffee
              you prefer to continue your wonderfull day.
            </Typography>
          </Container>

          {/* End hero unit */}
          <Container
            maxWidth="md"
            component="main"
            className="contentsContainer"
          >
            <Grid
              container
              spacing={5}
              alignItems="flex-end"
              justifyContent="center"
            >
              {coffees.map((coffee) => (
                // Enterprise card is full width at sm breakpoint
                <Grid
                  item
                  key={coffee.title}
                  xs={12}
                  sm={coffee.title === "Enterprise" ? 12 : 6}
                  md={3}
                >
                  <CoffeeCard coffee={coffee} handleIncrement={handleIncrement} />
                </Grid>
              ))}
            </Grid>
          </Container>
          {/* Footer */}
          <Footer />
          {/* End footer */}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default function App() {
  return <AppCompents />;
}
