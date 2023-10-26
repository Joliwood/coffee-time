import React, { useState, useMemo, createContext } from "react";
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
import { ThemeProvider } from "@mui/material/styles";
import createCustomTheme from "../theme/customTheme";
import CoffeeCard from "./CoffeeCard";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const AppCompents = () => {
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

  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={createCustomTheme(mode)}>
          <GlobalStyles
            styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
          />
          <CssBaseline />
          <Header />
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
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default AppCompents;
