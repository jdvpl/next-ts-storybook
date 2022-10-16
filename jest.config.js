const nextJest = require("next/jest");
/* Creating a jest config object. */
const createJestConfig = nextJest({
  /* Telling the nextJest function where to look for the next.config.js file. */
  dir: "./",
});

/* The above code is setting up the Jest configuration for the project. */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
