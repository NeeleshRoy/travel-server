const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'travel-server'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/travel-server-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'travel-server'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/travel-server-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'travel-server'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/travel-server-production'
  }
};

module.exports = config[env];
