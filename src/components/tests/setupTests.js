import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const config = {
  verbose: true,
  // bail: true,
  setupFilesAfterEnv: ["./src/components/tests/setupTests.js"],
};

module.exports = config;
