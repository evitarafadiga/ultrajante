import { create } from "../source/match.js";
import { createCombatant } from "../source/combatant.js";

export default function createMatch(socket, data) {
    if (socket.match) return { message: "Not created" };

    const match = create();
    const combatant = createCombatant();

    match.combatant = socket.id;
    socket.match = match;
    socket.combatant = combatant;

    return { message: "Match created!", id: match.id, combatant: combatant.id }
}