// ... (other imports here)
import { Server } from 'socket.io'; // <-- Import the Socket.IO server

const config = {
    // ...

    kit: {
        adapter: adapter(),
        vite: {
            plugins: [
                {
                    name: 'sveltekit-socket-io',
                    configureServer(server) {
                        const io = new Server(server.httpServer);

                        io.on('connection', (socket) => {
                        
                            // Receive incoming messages and broadcast them
                            socket.on('message', (message) => {
                                io.emit('message', {
                                    from: username,
                                    message: message,
                                    time: new Date().toLocaleString()
                                });

                                console.log(message.toString())
                            });

                        });           

                        console.log('SocketIO injetado');
                    }
                }
            ]
        }
    },

    // ...
};

export default config;
