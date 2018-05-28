import defaultConfig from './config-default.js';
import overrideConfig from './config-override.js';
import testConfig from './config-test.js';

let config = {};

if (process.env.NODE_ENV === 'production') {
    console.log(`Load defaultConfig...`);
    config = defaultConfig;
    try {
        console.log(`Load overrideConfig...`);
        config = Object.assign(config, overrideConfig);
    } catch (err) {
        console.log(`Cannot load ${err}.`);
    }
} else {
    console.log(`Load testConfig...`);
    config = testConfig;
}

export default config;
