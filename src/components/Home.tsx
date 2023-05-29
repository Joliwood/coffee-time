import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./Footer";
import Header from "./Header";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e66c0f",
      light: "#f7fbfc",
      dark: "#294753",
      contrastText: "#fff",
    },
  },
});

const tiers = [
  {
    title: "Cup of coffee",
    subheader: "Most popular",
    price: "15",
    description: ["A simple but very usefull cup of coffee"],
    buttonText: "Increment",
    buttonVariant: "contained",
  },
];

function PricingContent() {
  return (
    <React.Fragment>
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
          sx={{ pt: 8, pb: 6 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Coffee time !
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            You need a break, and you deserve it ! Let's pick up the coffee you
            prefer to continue your wonderfull day.
          </Typography>
        </Container>

        {/* End hero unit */}
        <Container maxWidth="md" component="main" className="contentsContainer">
          <Grid
            container
            spacing={5}
            alignItems="flex-end"
            justifyContent="center"
          >
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    action={tier.title === "Pro" ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h3"
                        color="text.primary"
                      >
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant as "outlined" | "contained"}
                    >
                      {tier.buttonText}
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
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
