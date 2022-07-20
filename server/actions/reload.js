import load from "../actions.js";

export function reload(socket, data) {
    load();
    return { message: "actions reloaded" };
}