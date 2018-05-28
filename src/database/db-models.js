// scan all models defined in models:
import fs from 'fs';
import db from './db-specs';

const exportModels = {};

if (process.env.NODE_ENV === 'production') {
    let context = require.context('./models', true, /\.js$/);
    context.keys().forEach(model => {
        let name = model.substring(2, model.length - 3);
        exportModels[name] = context(model);
    });
} else {
    let files = fs.readdirSync(__dirname + '/models');
    let js_files = files.filter(f => f.endsWith('.js'), files);
    for (let f of js_files) {
        console.log(`import model from file ${f}...`);
        let name = f.substring(0, f.length - 3);
        exportModels[name] = require(__dirname + '/models/' + f);
    }
}

exportModels.sync = () => {
    return db.sync();
};

export default exportModels;
