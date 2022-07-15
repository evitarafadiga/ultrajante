// socket-handler.js
import { Server } from "socket.io";

import load from './actions.js';
const actions = load();

export default function injectSocketIO(server) {
    const io = new Server(server, {
        cors: { origin: "*" }
    });


    // Socket.IO stuff goes here
    io.on('connection', (socket) => {
        // Generate a random username and send it to the client to display it
        let username = `User ${Math.round(Math.random() * 999999)}`;
        socket.emit('name', username);

        // Receive incoming messages and broadcast them
        socket.on('message', (message) => {
            let time = new Date().toLocaleString();
            io.emit('message', {
                from: username,
                message: message,
                time: time
            });

            /*
            (async ()=> {
                const messageRef = await addDoc(collection(db, 'globalchat'), {
                    date: time,
                    message: message,
                    nickname: username
                });
                console.log('chegou aqui')
            }) () */
        });

        socket.onAny((name, data, response) => {
            const action = actions.get(name);
            if (!action) return;
    
            const result = action(socket, data);
            if (response instanceof Function) response(result);
        });
        
    });

    console.log('SocketIO injected');
}
