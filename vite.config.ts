import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { ViteToml } from "vite-plugin-toml";
import { imagetools } from "@zerodevx/svelte-img/vite";

export default defineConfig({
	plugins: [ViteToml(), sveltekit(), imagetools()],
});
