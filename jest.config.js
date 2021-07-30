module.exports = {
    testMatch: ["**/+(*.)+(spec).+(ts|js)?(x)"],
    transform: {
      "^.+\\.(ts|tsx|js|html)$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "html", "css"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["lcov", "json-summary", "text-summary"],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  };