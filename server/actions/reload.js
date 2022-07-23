import load from "../actions.js";

export default function reload(socket, data) {
    load();
    return { message: "actions reloaded" };
}