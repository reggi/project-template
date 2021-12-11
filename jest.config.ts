// jest.config.ts
import { defaults } from "ts-jest/jest-preset";

const config = {
  transformIgnorePatterns: [
    // https://stackoverflow.com/questions/46898638/importing-images-breaks-jest-test
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/file-transformer.js",
    ...defaults,
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tests/tsconfig.json",
    },
  },
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js"],
  testRegex: "(/tests/.*\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  cacheDirectory: ".jest/cache",
};

export default config;
