import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "src/assets"),
        "@features": path.resolve(__dirname, "src/features"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
    },
  };
});
