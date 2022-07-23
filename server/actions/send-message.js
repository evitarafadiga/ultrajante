export default function sendMessage(socket, data) {
    
    let date = new Date().toLocaleString;
    let nickname = data.nickname;
    let message = data.message;

    console.log(message.toString())
    
    return { nickname : nickname, message: message, date: date }

}