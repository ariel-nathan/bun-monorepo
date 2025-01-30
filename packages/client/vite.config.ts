import path from "node:path"
import { defineConfig } from "vite"
import "./src/env"

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
