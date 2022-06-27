import { sveltekit } from "@sveltejs/kit/experimental/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const entry = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "src/lib/all-custom-elements.js"
);

const mode = process.env.NODE_ENV;
const dev = mode === "development";

export default defineConfig({
  ...(dev
    ? {}
    : {
        build: {
          lib: {
            entry,
            name: "AllCustomElements",
            fileName: () => "all-custom-elements.js",
            formats: ["es"],
          },
          minify: false,
        },
      }),

  plugins: [dev ? sveltekit() : svelte()],

  ...(dev
    ? {}
    : {
        resolve: {
          alias: {
            $lib: resolve("./src/lib"),
          },
        },
      }),
});
