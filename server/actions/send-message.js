module.exports = function sendMessage(socket, data) {
    
    let date = new Date().toLocaleString;
    let nickname = data.nickname;
    let message = data.message;

    return { nickname : nickname, message: message, date: date }

}