export default {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testEnvironment: "jsdom", // Entorno simulado de navegador
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Importa este archivo de configuración
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleNameMapper: {
    // Aquí puedes mapear módulos si es necesario
  },
  transformIgnorePatterns: ["/node_modules/"], // Ignorar transformaciones en node_modules
};
