import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { increaseByFive } from "../redux/reducers/counterReducer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const coffees = [
  {
    title: "Cup of coffee",
    picture: "https://cutewallpaper.org/24x/r9vlme81k/372330969.jpg",
    buttonText: "Drink it",
    buttonVariant: "contained",
  },
  {
    title: "Mug of coffee",
    picture: "https://cutewallpaper.org/24x/r9vlme81k/1960814169.jpg",
    buttonText: "Drink it",
    buttonVariant: "contained",
  },
  {
    title: "Nice coffee",
    picture:
      "https://i.pinimg.com/236x/72/66/15/726615af38914236e88e7bf0eeb0616d.jpg",
    buttonText: "Drink it",
    buttonVariant: "contained",
  },
];

function AppCompents() {
  const dispatch = useDispatch<AppDispatch>();
  const handleIncrement = () => {
    dispatch(increaseByFive());
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
                  <Card>
                    <CardHeader
                      title={coffee.title}
                      titleTypographyProps={{ align: "center" }}
                      action={coffee.title === "Pro" ? <StarIcon /> : null}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === "light"
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent className="coffeeContainer">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "baseline",
                          mb: 2,
                        }}
                      >
                        <img src={coffee.picture} alt={coffee.picture} />
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        fullWidth
                        variant={
                          coffee.buttonVariant as "outlined" | "contained"
                        }
                        onClick={handleIncrement}
                        data-testid="incrementButton"
                      >
                        {coffee.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
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
