module.exports = {
  preset: "ts-jest",
  setupFiles: ["jest-useragent-mock"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
}
