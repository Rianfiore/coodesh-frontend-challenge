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
    "src/app/**/*.tsx",
    "src/app/**/*.test.tsx",
    "src/app/utils/**/*.ts",
    "!src/app/utils/index.ts",
    "!src/app/icons/**",
    "!src/app/**/layout.tsx",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/app/$1",
    "^@/assets/(.*)$": "<rootDir>/public/$1",
    "^swiper": "<rootDir>/node_modules/swiper/swiper.min.js",
    "swiper/react": "swiper/swiper-react.d.ts",
    "swiper/modules": "swiper/types/modules/index.d.ts",
    "swiper/css": "swiper/swiper.min.css",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "src/app/(pages)/(publicRoutes)/(home)/Home.test.tsx",
  ],
  transformIgnorePatterns: ["/node_modules/(?!swiper|ssr-window|dom7)"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
