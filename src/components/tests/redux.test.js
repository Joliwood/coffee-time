import Home from "../Home.tsx";
import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import React from "react";
import "@testing-library/jest-dom";

// Changement de Jest 27 à 28, faire attention à ces lignes pour le passage en TS
// - const expect = require('expect');
// + const {expect} = require('expect');

const mockStore = configureStore([]);
const store = mockStore({ counter: [] });

afterEach(() => {
  cleanup();
});

describe("test in TS", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  it("should exists", () => {
    expect(screen.getByTestId("header")).not.toBeNull();
  }, 1000);
});
