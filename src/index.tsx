import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from "./components/FirstComponent";
import UserComponent from "./components/UserComponent";
import "./index.scss";
import "./reset.css";

ReactDOM.render(
  <body className="globalContainer">
    <h1>Hello, Welcome to React and TypeScript</h1>
    <FirstComponent />
    <UserComponent
      name="John Doe"
      age={26}
      address="87 Summer St, Boston, MA 02110"
      dob={new Date()}
    />
  </body>,
  document.getElementById("root")
);
