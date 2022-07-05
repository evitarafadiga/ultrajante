const match = require("../source/match");

module.exports = function selectMove(socket, data) {
    if (!socket.match) return { message: "Any match founded" };
    if (!data.move) return { message: "Move not selected" };

    let player = socket.playerId;
    let target = socket.targetId;

    let move = data.move;
    let hero = data.hero;
    
    match = socket.match;

    match.damage(match, player, target, move, hero);
    
    return { damage: damage + "suffered damage."}
} 