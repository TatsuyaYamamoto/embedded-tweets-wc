import path from "path";

import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      name: "EmbeddedTweetWebComponents",
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) => `embedded-tweet-web-components.${format}.js`,
    },
  },
});
