import { create } from "../source/match.js";

export function createMatch(socket, data) {
    if (socket.match) return { message: "Not created" };

    const match = create();
    match.playerA = socket.id;
    socket.match = match;

    return { message: "Match created!", id: match.id }
}