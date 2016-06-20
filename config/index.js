import path from 'path';

export default {

  "express": {
    "port": process.env.EXPRESS_PORT || 3001,
    "host": process.env.EXPRESS_HOST || "localhost"
  },

  "database": {
    "name": process.env.DB_PORT || "app_name",
    "user": process.env.DB_USER || "postgres",
    "pass": process.env.DB_PASS || "postgres",
    "settings": {
      "host": process.env.DB_HOST || "localhost",
      "dialect": "postgres",
      "logging": false
    }
  },

  "winston": {
    "file": {
      "level": "info",
      "filename": path.resolve(__dirname, "/logs/all-logs.js"),
      "handleExceptions": true,
      "json": true,
      "maxsize": 5242880, //5MB
      "maxFiles": 5,
      "colorize": false
    },
    "console": {
      "level": 'debug',
      "handleExceptions": true,
      "json": false,
      "colorize": true
    }
  }

};


