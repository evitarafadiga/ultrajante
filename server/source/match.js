import { v4 as uuidv4 } from 'uuid';

export const list = new Map();

export function create() {
    let id = null;
    do id = uuidv4(); while(list.has(id));

    const match = { id, playerA: null, playerB: null }
    list.set(id, match);

    return match;
}

export function destroy(id) {
    const match = list.get(id);
    if (!match) return;

    match.id = null;

    if (match.playerA) {
        match.playerA.match = null;
        match.playerA = null;
    }

    if (match.playerB) {
        match.playerB.match = null;
        match.playerB = null;
    }

    list.delete(id);
}

export default{
    create, destroy,
    list: () => [...list.values()]
}
