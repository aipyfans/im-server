import webServer from "../src/app";
import request from "supertest";

let server = webServer.listen(3002);
console.log('im test server started at port 3002...');

describe('#test api of user', () => {

    it('#test GET /api/users', async () => {
        let res = await request(server)
            .get('/api/users')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(res => {
                res.body.users.length.size == 2
            });
    });

});