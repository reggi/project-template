// jest.config.ts
import type { InitialOptionsTsJest } from 'ts-jest'
import { defaults as tsjPreset } from 'ts-jest/presets'

const config: InitialOptionsTsJest = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tests/tsconfig.json',
    },
  },
  "preset": "react-native",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "transform": {
    ...tsjPreset.transform
  },
  "testRegex": "(/tests/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "testPathIgnorePatterns": [
    "\\.snap$",
    "<rootDir>/node_modules/"
  ],
  "cacheDirectory": ".jest/cache"
}

export default config