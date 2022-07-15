import { collection, addDoc } from "firebase/firestore";

module.exports = function sendMessage(socket, data) {
    
    let date = new Date().toLocaleString;
    let nickname = data.nickname;
    let message = data.message;

    /*
    (async ()=> {
        const mesRef = await addDoc(collection(db, "globalchat"), {
            date: date,
            message: message,
            nickname: nickname
        });
    }) () */
    
    return { nickname : nickname, message: message, date: date }

}