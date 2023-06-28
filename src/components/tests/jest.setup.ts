import { configure } from "enzyme";
import type { Config } from "@jest/types";
import { TextEncoder } from "util";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
global.TextEncoder = TextEncoder;

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.ts"],
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json",
    },
    TextEncoder: require("util").TextEncoder,
    TextDecoder: require("util").TextDecoder,
  },
};

export default config;
