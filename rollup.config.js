import { defineConfig } from "rollup";
import ts from "rollup-plugin-ts";

export default defineConfig({
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
  },
  plugins: [
    ts({
      tsconfig: {
        target: "es6",
        allowJs: true,
        module: "es6",
        allowSyntheticDefaultImports: true,
        declaration: true,
        outDir: "dist",
      },
    }),
  ],
});
