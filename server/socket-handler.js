// socket-handler.js
import { Server } from "socket.io";

import load from './actions.js';
const actions = load();

import { getFirestore, collection, onSnapshot, query, orderBy, doc, limit, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";
import { firebaseConfig } from "../src/lib/firebaseConfig.js";

const firebaseApp = (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
const db = getFirestore(firebaseApp);
const globalChatRef = collection(db, "globalchat");

export default function injectSocketIO(server) {
    const io = new Server(server, {
        cors: { origin: "*" }
    });

    // Socket.IO stuff goes here
    io.on('connection', (socket) => {
        // Generate a random nickname and send it to the client to display it
        let nickname = `Usuário ${Math.round(Math.random() * 999999)}`;
        socket.emit('name', nickname);
        
        // Receive incoming messages and broadcast them
        socket.on('message', (message) => {
            io.emit('message', {
                from: nickname,
                message: message,
                time: new Date().toLocaleString()
            });

            // (async () => { const usermessage = await addDoc(collection(db, "globalchat"), {
            //     from: nickname,
            //     message: message,
            //     time: new Date().toLocaleString()
            //   });
            // }) ()
        });

        socket.on('history-message', (data) => {
            const globalChatMessages = [];
            onSnapshot(globalChatRef, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const { nickname: from, message, time } = doc.data();
                    globalChatMessages.push({from, message, time});
                });
                socket.emit('history-message', globalChatMessages);
            });
            
        })

        socket.on('global-message', (data) => {
            const globalChatMessages = [];
            const globalChatRef = collection(db, "globalchat");
            const q = query(globalChatRef, orderBy('time', "asc"), limit(100));
            (async ()=> {
                const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        const { from, message, time } = doc.data();
                        globalChatMessages.push({from, message, time});
                    });
                    socket.emit('global-message', globalChatMessages);
            }) ()
            

        })

        socket.onAny((name, data, response) => {
            const action = actions.get(name);
            if (!action) return;
            const result = action(socket, data);
            if (response instanceof Function) response(result);
        });

    });

    console.log('SocketIO injetado');
}