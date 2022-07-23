import fs from 'fs';
import path from 'path';

const ACTIONS_DIR_PATH = './server/actions';
//const ACTIONS_DIR_PATH = new URL ('./actions', import.meta.url).href;

const actions = new Map();

function load() {
    console.log("loading actions");

    const ACTIONS_DIRENTS = fs.readdirSync(ACTIONS_DIR_PATH, {
        withFileTypes: true
    });

    for (const dirent of ACTIONS_DIRENTS) {
        if (!dirent.name.endsWith(".js") || !dirent.isFile()) continue;

        const abs_path = path.resolve(ACTIONS_DIR_PATH, dirent.name);
        console.log(abs_path);
        //const action = import (abs_path);
        const action = import(new URL(`./actions/${dirent.name}`, import.meta.url).href);
        action.then(module => {
            actions.set(dirent.name.split('.')[0], module.default);
        })

    }

    return actions;
}

export default load;