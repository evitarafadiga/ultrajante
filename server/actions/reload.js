const load = require("../actions");

module.exports = function reload(socket, data) {
    load();
    return { message: "actions reloaded" };
}