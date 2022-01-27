// Initializes the `RedisService` service on path `/redis-service`
const { RedisService } = require('./redis-service.class');
const hooks = require('./redis-service.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/redis-service', new RedisService(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('redis-service');

  service.hooks(hooks);
};
