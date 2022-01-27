const { Service } = require('feathers-memory');
const { Client } = require('redis-om');

exports.RedisService = class RedisService extends Service {

    async find(params) {
        let client = new Client();
        await client.open('redis://localhost:6379');

        let aString = await client.execute(['PING']);
        let aNumber = await client.execute(['HSET', 'foo', 'bar', 'baz', '42'])
  }
};
