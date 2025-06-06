import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    coverage: {
      provider: "v8", 
      reporter: ["text", "html"],
      reportsDirectory: "./coverage",
    },
  },
});
