import Home from "../App.tsx";
import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import React from "react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";

const mockStore = configureStore([]);
const store: any = mockStore({ counter: [] });

afterEach(() => {
  cleanup();
});

describe("Checking Redux", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it("should exists", () => {
    expect(screen.getByTestId("header")).not.toBeNull();
  }, 1000);
});
