import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
    TextEncoder: require("util").TextEncoder,
    TextDecoder: require("util").TextDecoder,
  }
};

export default config;
