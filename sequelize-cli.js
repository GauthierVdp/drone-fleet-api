const path = require('path');
require('ts-node').register();

module.exports = {
  'config': path.resolve('src/config/database.ts'),  // Adjusted to your TypeScript config
  'models-path': path.resolve('src/models'),
  'seeders-path': path.resolve('src/seeders'),
  'migrations-path': path.resolve('src/migrations'),
};
