const { create } = require("../source/match");

module.exports = function createMatch(socket, data) {
    if (socket.match) return { message: "Not created" };

    const match = create();
    match.playerA = socket.id;
    socket.match = match;

    return { message: "Match created!", id: match.id }
}