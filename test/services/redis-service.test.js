const app = require('../.././/app');

describe('\'RedisService\' service', () => {
  it('registered the service', () => {
    const service = app.service('redis-service');
    expect(service).toBeTruthy();
  });
});
