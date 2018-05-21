import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import SioServer from 'socket.io';
import {createServer} from 'http';

import bindApis from './middlewares/apis';
import bindRest from './middlewares/rest';

const koaApp = new Koa();

// 打印URL
koaApp.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next(); // 调用下一个middleware
});

// 打印Request和Response之间的时长
koaApp.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

koaApp.use(bodyParser());

// bind .rest() for ctx:
koaApp.use(bindRest());

// add apis scanner:
koaApp.use(bindApis());

const webServer = createServer(koaApp.callback());

const io = new SioServer(webServer);
io.on('connection', function (socket) {
    socket.emit('news', {hello: 'world'});
    socket.on('event', function (data) {
        console.log(data);
    });
});

module.exports = {koaApp, webServer};