export default {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
        importSource: "react",
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
