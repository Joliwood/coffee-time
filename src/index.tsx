import * as React from "react";
import * as ReactDOM from "react-dom";
// import FirstComponent from "./components/FirstComponent";
// import UserComponent from "./components/UserComponent";
import "./index.scss";
import Pricing from "./components/Pricing";

ReactDOM.render(
  <body className="globalContainer">
    {/* <FirstComponent />
    <UserComponent
      name="John Doe"
      age={26}
      address="87 Summer St, Boston, MA 02110"
      dob={new Date()}
    /> */}
    <Pricing />
  </body>,
  document.getElementById("root")
);
