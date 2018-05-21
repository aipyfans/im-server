import Router from 'koa-router';
import fs from 'fs';

// add url-route in /controllers:

function addMapping(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);

        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);

        } else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);

        } else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);

        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}


function addControllers(router) {

    if (process.env.NODE_ENV === 'production') {
        let context = require.context('../apis', true, /\.js$/);
        context.keys().forEach(api => {
            let mapping = context(api);
            addMapping(router, mapping);
        });

    } else {
        let dir = 'apis';
        let apis_dir, current_dir = '/middlewares';
        if (__dirname.endsWith(current_dir)) {
            let endNum = __dirname.length - current_dir.length;
            apis_dir = __dirname.substring(0, endNum)
        }

        fs.readdirSync(apis_dir + '/' + dir).filter((f) => {
            return f.endsWith('.js');
        }).forEach((f) => {
            console.log(`process controller: ${f}...`);
            let mapping = require(apis_dir + '/' + dir + '/' + f);
            addMapping(router, mapping);
        });
    }
}

export default () => {
    let router = new Router();
    addControllers(router);
    return router.routes();
};