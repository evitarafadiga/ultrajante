import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import injectSocketIO from "./server/socket-handler.js"; // <- Import the new function

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	],
	kit: {
		adapter: adapter(),
		vite: {
            plugins: [
                {
                    name: "sveltekit-socket-io",
                    configureServer(server) {
                        injectSocketIO(server.httpServer);
                    }
                }
            ]
        }
	}
};

export default config;
