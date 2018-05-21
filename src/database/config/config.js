const fs = require('fs');

let config = null;

if (process.env.NODE_ENV === 'test') {
    const testConfig = require('./config-test.js');

    console.log(`Load ${testConfig}...`);
    config = testConfig;

} else {
    const defaultConfig = require('./config-default.js');
    const overrideConfig = require('./config-override.js');

    console.log(`Load ${defaultConfig}...`);
    config = defaultConfig;
    try {
        if (fs.statSync(overrideConfig).isFile()) {
            console.log(`Load ${overrideConfig}...`);
            config = Object.assign(config, overrideConfig);
        }
    } catch (err) {
        console.log(`Cannot load ${overrideConfig}.`);
    }
}

module.exports = config;
