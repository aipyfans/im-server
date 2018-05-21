!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=26)}([function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("babel-polyfill")},function(e,t,r){"use strict";var n=r(3);e.exports=n.defineModel("users",{email:{type:n.STRING(100),unique:!0},passwd:n.STRING(100),name:n.STRING(100),gender:n.BOOLEAN})},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(13),s=r(12),i=r(11);function u(){return s.v4()}console.log("init sequelize...");var a=new o(i.database,i.username,i.password,{host:i.host,dialect:i.dialect,pool:{max:5,min:0,idle:1e4}}),c=o.STRING(50),l={defineModel:function(e,t){var r={};for(var s in t){var i=t[s];"object"===(void 0===i?"undefined":n(i))&&i.type?(i.allowNull=i.allowNull||!1,r[s]=i):r[s]={type:i,allowNull:!1}}return r.id={type:c,primaryKey:!0},r.createdAt={type:o.BIGINT,allowNull:!1},r.updatedAt={type:o.BIGINT,allowNull:!1},r.version={type:o.BIGINT,allowNull:!1},a.define(e,r,{tableName:e,timestamps:!1,hooks:{beforeValidate:function(e){var t=Date.now();e.isNewRecord?(console.log("will create entity..."+e),e.id||(e.id=u()),e.createdAt=t,e.updatedAt=t,e.version=0):(console.log("will update entity..."),e.updatedAt=t,e.version++)}}})},sync:function(){throw new Error("Cannot sync() when NODE_ENV is set to 'production'.")}},f=!0,d=!1,p=void 0;try{for(var v,y=["STRING","INTEGER","BIGINT","TEXT","DOUBLE","DATEONLY","BOOLEAN"][Symbol.iterator]();!(f=(v=y.next()).done);f=!0){var m=v.value;l[m]=o[m]}}catch(e){d=!0,p=e}finally{try{!f&&y.return&&y.return()}finally{if(d)throw p}}l.ID=c,l.generateId=u,e.exports=l},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||"/api/",t=regeneratorRuntime.mark(function t(r,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.request.path.startsWith(e)){t.next=16;break}return console.log("Process API "+r.request.method+" "+r.request.url+"..."),r.rest=function(e){r.response.type="application/json",r.response.body=e,console.log(JSON.stringify(e))},t.prev=3,t.next=6,n();case 6:t.next=14;break;case 8:t.prev=8,t.t0=t.catch(3),console.log("Process API error..."),r.response.status=400,r.response.type="application/json",r.response.body={code:t.t0.code||"internal:unknown_error",message:t.t0.message||""};case 14:t.next=18;break;case 16:return t.next=18,n();case 18:case"end":return t.stop()}},t,void 0,[[3,8]])}),r=function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,s){try{var i=e[o](s),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});t(u)}("next")})},function(e,t){return r.apply(this,arguments)};var t,r},e.exports=t.default},function(e,t,r){var n={"./User":2,"./User.js":2};function o(e){var t=s(e);return r(t)}function s(e){var t=n[e];if(!(t+1)){var r=new Error('Cannot find module "'+e+'".');throw r.code="MODULE_NOT_FOUND",r}return t}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id=8},function(e,t,r){"use strict";e.exports={dialect:"mysql",database:"db_im",username:"im",password:"im",host:"116.196.91.32",port:3306}},function(e,t,r){"use strict";e.exports={dialect:"mysql",database:"db_im",username:"im",password:"im",host:"116.196.91.32",port:3306}},function(e,t,r){"use strict";var n=r(0),o=null,s=r(10),i=r(9);console.log("Load "+s+"..."),o=s;try{n.statSync(i).isFile()&&(console.log("Load "+i+"..."),o=Object.assign(o,i))}catch(e){console.log("Cannot load "+i+".")}e.exports=o},function(e,t){e.exports=require("node-uuid")},function(e,t){e.exports=require("sequelize")},function(e,t,r){"use strict";(function(t){var n=r(0),o=r(3),s=n.readdirSync(t+"/models"),i=s.filter(function(e){return e.endsWith(".js")},s);e.exports={};var u=!0,a=!1,c=void 0;try{for(var l,f=i[Symbol.iterator]();!(u=(l=f.next()).done);u=!0){var d=l.value;console.log("import model from file "+d+"...");var p=d.substring(0,d.length-3);e.exports[p]=r(8)("./"+d)}}catch(e){a=!0,c=e}finally{try{!u&&f.return&&f.return()}finally{if(a)throw c}}e.exports.sync=function(){return o.sync()}}).call(this,"src/database")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.code=t||"internal:unknown_error",this.message=r||""},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(15))&&n.__esModule?n:{default:n},s=r(14).User;t.default={"GET /api/users":function(){var e,t=(e=regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.findAll();case 2:if(!(n=e.sent)){e.next=7;break}t.rest({users:n}),e.next=8;break;case 7:throw new o.default("users:not_found","user not found by id.");case 8:case"end":return e.stop()}},e,void 0)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,s){try{var i=t[o](s),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}("next")})});return function(e,r){return t.apply(this,arguments)}}()},e.exports=t.default},function(e,t,r){var n={"./user.js":16};function o(e){var t=s(e);return r(t)}function s(e){var t=n[e];if(!(t+1)){var r=new Error('Cannot find module "'+e+'".');throw r.code="MODULE_NOT_FOUND",r}return t}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id=17},function(e,t){e.exports=require("koa-router")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(18));function o(e){return e&&e.__esModule?e:{default:e}}o(r(0)),t.default=function(){var e=new n.default;return function(e){var t=r(17);t.keys().forEach(function(r){var n=t(r);!function(e,t){for(var r in t)if(r.startsWith("GET ")){var n=r.substring(4);e.get(n,t[r]),console.log("register URL mapping: GET "+n)}else r.startsWith("POST ")?(n=r.substring(5),e.post(n,t[r]),console.log("register URL mapping: POST "+n)):r.startsWith("PUT ")?(n=r.substring(4),e.put(n,t[r]),console.log("register URL mapping: PUT "+n)):r.startsWith("DELETE ")?(n=r.substring(7),e.del(n,t[r]),console.log("register URL mapping: DELETE "+n)):console.log("invalid URL: "+r)}(e,n)})}(e),e.routes()},e.exports=t.default},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("socket.io")},function(e,t){e.exports=require("koa-bodyparser")},function(e,t){e.exports=require("koa")},function(e,t,r){"use strict";var n=c(r(23)),o=c(r(22)),s=c(r(21)),i=r(20),u=c(r(19)),a=c(r(7));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,s){try{var i=t[o](s),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}("next")})}}var f,d,p=new n.default;p.use((f=l(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.request.method+" "+t.request.url),e.next=3,r();case 3:case"end":return e.stop()}},e,void 0)})),function(e,t){return f.apply(this,arguments)})),p.use((d=l(regeneratorRuntime.mark(function e(t,r){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).getTime(),e.next=3,r();case 3:o=(new Date).getTime()-n,console.log("Time: "+o+"ms");case 5:case"end":return e.stop()}},e,void 0)})),function(e,t){return d.apply(this,arguments)})),p.use((0,o.default)()),p.use((0,a.default)()),p.use((0,u.default)());var v=(0,i.createServer)(p.callback());new s.default(v).on("connection",function(e){e.emit("news",{hello:"world"}),e.on("event",function(e){console.log(e)})}),e.exports={koaApp:p,webServer:v}},function(e,t,r){"use strict";r(24).webServer.listen(3001),console.log("im server started at port 3001...")},function(e,t,r){r(1),e.exports=r(25)}]);
//# sourceMappingURL=sio_server.js.map