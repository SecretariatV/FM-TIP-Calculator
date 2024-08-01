import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 5000,
      host: "0.0.0.0",
    },
    resolve: {
      alias: {
        "@assets": "/src/assets",
        "@features": "/src/features",
        "@styles": "/src/styles",
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
    },
    base: "/FM-TIP-Calculator/",
  };
});
