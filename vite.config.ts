import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import path from "path";

export default defineConfig({
  plugins: [
    ...tanstackStart({
      // Provide our app's start/router entry files relative to the `src` directory.
      start: { entry: "entry/tanstack-start-virtual.ts" },
      router: { entry: "entry/tanstack-router-virtual.ts" },
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
    }),
    tailwind(),
    react(),
  ],
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: path.resolve(process.cwd(), "src").replace(/\\\\/g, "/") + "/",
      },
      {
        find: "#tanstack-start-entry",
        replacement: path.resolve(process.cwd(), "src/entry/tanstack-start-virtual.ts"),
      },
      {
        find: "#tanstack-router-entry",
        replacement: path.resolve(process.cwd(), "src/entry/tanstack-router-virtual.ts"),
      },
    ],
  },
  build: {
    // Code splitting and optimization for better performance
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          // Separate vendor chunks for better caching
          if (id.includes("node_modules/react")) return "vendor-react";
          if (id.includes("node_modules/@tanstack/react-router")) return "vendor-router";
          if (id.includes("node_modules/@radix-ui")) return "vendor-ui";
          if (id.includes("node_modules/lucide-react")) return "vendor-icons";
        },
      },
    },
    // Optimize chunk sizes
    chunkSizeWarningLimit: 1000,
    minify: "terser",
  },
});
