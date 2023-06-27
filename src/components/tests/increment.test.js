import Button from "../Home.tsx";
import Header from "../Header.tsx";
import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import React from "react";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);
const store = mockStore({ counter: [] });

afterEach(() => {
  cleanup();
});

describe("test in TS", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  it("should exists", () => {
    expect(screen.getByTestId("header")).not.toBeNull();
  }, 1000);
});

// describe("Button increment well on Redux", () => {
//   render(
//     <Provider store={store}>
//       <Button />
//     </Provider>
//   );
//   const incrementButton = screen.getByTestId("incrementButton");

//   it("should exists", () => {
//     expect(incrementButton).not.toBeNull();
//   }, 1000);

//   it("should exists SECOND PART", () => {
//     expect(incrementButton).not.toBeNull();
//   }, 1000);
// });
