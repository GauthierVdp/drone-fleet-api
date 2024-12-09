const path = require('path');

module.exports = {
  config: path.resolve('config', 'config.js'),
  modelsPath: path.resolve('src', 'data', 'models'),
  migrationsPath: path.resolve('src', 'data', 'migrations'),
  seedersPath: path.resolve('src', 'data', 'seeders'),
};
