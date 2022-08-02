import { v4 as uuidv4 } from 'uuid';

export const list = new Map();

export function createCombatant() {
    let id = null;
    do id = uuidv4(); while(list.has(id));

    const combatant = { id, nickname: null, hitpoints: null, deck: null }
    list.set(id, combatant);

    return combatant;
}

export function damage(id, move) {
    hitpoints =- move.damage;
    return hitpoints;
}

export function destroy(id) {
    const combatant = list.get(id);
    if (!combatant) return;

    combatant.id = null;

    if (combatant.hitpoints) {
        combatant.hitpoints <= 0;
        combatant.deck = null;
    }

    list.delete(id);
}

export default{
    createCombatant, destroy, damage,
    list: () => [...list.values()]
}
