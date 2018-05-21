// scan all models defined in models:
const fs = require('fs');
const db = require('./db-specs');

let files = fs.readdirSync(__dirname + '/models');
let js_files = files.filter(f => f.endsWith('.js'), files);

module.exports = {};

// TODO
// let context = require.context('./models', true, /\.js$/);
// context.keys().forEach(model => {
//     console.log(model);
//     let name = model.substring(2, model.length - 3);
//     module.exports[name] = context(model);
// });

for (let f of js_files) {
    console.log(`import model from file ${f}...`);
    let name = f.substring(0, f.length - 3);
    module.exports[name] = require(__dirname + '/models/' + f);
}

module.exports.sync = () => {
    return db.sync();
};
