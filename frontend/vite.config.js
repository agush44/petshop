import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), [compression()]],
  build: {
    minify: "esbuild",
    terserOptions: {
      compress: { drop_console: true },
      output: { comments: false },
    },
    rollupOptions: {
      treeshake: true,
    },
  },
});
