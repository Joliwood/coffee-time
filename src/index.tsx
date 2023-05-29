import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import Home from "./components/Home";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";

ReactDOM.render(
  // <Provider store={store}>
  <body className="globalContainer">
    <Home />
  </body>,
  // </Provider>,
  document.getElementById("root")
);
