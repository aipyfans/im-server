import 'babel-polyfill';
import IO from 'socket.io-client';
const socket = IO('http://localhost:3001');

socket.on('connect', () => {
    console.log('---connect');
});

socket.on('message', data => {
    console.log(data);
});

socket.on('error', error => {
    console.log(error);
});

socket.on('disconnect', () => {
    console.log('---disconnect');
});

socket.on('news', function (data) {
    console.log(data);
    socket.emit('event', { my: 'data' });
});

console.log('im client started ...');