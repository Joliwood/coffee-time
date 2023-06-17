import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { decrement } from "../redux/reducers/counterReducer";

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 25,
    label: "25%",
  },
  {
    value: 50,
    label: "50%",
  },
  {
    value: 75,
    label: "75%",
  },
  {
    value: 100,
    label: "100%",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

const GradientSlider = styled(Slider)(({ theme }) => ({
  color: "transparent",
  height: 4,
  padding: "15px 0",
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
    height: 4,
    borderRadius: 2,
  },
  "& .MuiSlider-track": {
    height: 4,
    borderRadius: 2,
    backgroundImage: "linear-gradient(to right, red, #00ff22)",
    borderLeftWidth: 0,
  },
  "& .MuiSlider-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#e66c0f",
    width: 16,
    height: 16,
    "&:before": {
      boxShadow: "none",
    },
    "&:hover, &.Mui-active": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-mark": {
    display: "none",
  },
}));

export default function CaffeineBar() {
  const dispatch = useDispatch<AppDispatch>();
  const sliderValue = useSelector((state: RootState) => state.counter.value);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(decrement());
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, sliderValue]);

  return (
    <Box className="caffeineBarContainer">
      <GradientSlider
        aria-label="Always visible"
        value={sliderValue}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        valueLabelDisplay="off"
      />
    </Box>
  );
}
