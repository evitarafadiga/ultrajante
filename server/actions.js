const fs = require('fs');
const path = require('path');

const ACTIONS_DIR_PATH = path.resolve(__dirname, 'actions');

const actions = new Map();

function load() {
    console.log("loading actions");

    const ACTIONS_DIRENTS = fs.readdirSync(ACTIONS_DIR_PATH, {
        withFileTypes: true
    });

    for (const dirent of ACTIONS_DIRENTS) {
        if (!dirent.name.endsWith(".js") || !dirent.isFile()) continue;
        
        const abs_path = path.resolve(ACTIONS_DIR_PATH, dirent.name);
        delete require.cache[abs_path];
        const action = require(abs_path);

        actions.set(path.parse(dirent.name).name, action);
    }

    return actions;
}

module.exports = load;