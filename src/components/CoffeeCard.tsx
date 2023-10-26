import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import StarIcon from "@mui/icons-material/StarBorder";
import type { Coffee } from "../../types";

type CoffeeCardProps = {
  coffee: Coffee;
  handleIncrement: (caffeineQuantity: number) => void;
}

function CoffeeCard({ coffee, handleIncrement }: CoffeeCardProps) {
  return (
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
          onClick={() => handleIncrement(coffee.caffeineQuantity)}
          data-testid="incrementButton"
        >
          {coffee.buttonText}
        </Button>
      </CardActions>
    </Card>
  )
}

export default CoffeeCard