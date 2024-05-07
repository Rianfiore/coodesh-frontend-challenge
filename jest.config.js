const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",

  collectCoverageFrom: [
    "src/app/{components,hooks}/**/*.tsx",
    "src/app/utils/**/*.ts",
    "!src/app/utils/index.ts",
    "!src/app/icons/**",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/app/$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
