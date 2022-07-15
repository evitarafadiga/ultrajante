import { sveltekit } from '@sveltejs/kit/vite';
import { Server } from 'socket.io';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), {
		name: 'sveltekit-socket-io',
		configureServer(server) {
			const io = new Server(server.httpServer);
			console.log('SocketIO injected');
		}
	}]
};

export default config;