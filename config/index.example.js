import path from 'path';

export default config = {

  "express": {
    "port": process.env.EXPRESS_PORT || 3000,
    "host": process.env.EXPRESS_HOST || "127.0.0.1"
  },

  "database": {
    "port": process.env.DB_PORT || "5432",
    "host": process.env.DB_HOST || "localhost",
    "user": process.env.DB_USER || "postgres",
    "pass": process.env.DB_PASS || "postgres",
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


