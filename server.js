import express from 'express';
import http from 'http';
import morgan from 'morgan';
import winston from 'winston';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes';
import config from './config';
import model from './models';

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cookies
app.use(cookieParser());

// logging 
const logger = new winston.Logger({
  transports: [
    new winston.transports.File(config.winston.file),
    new winston.transports.Console(config.winston.console)
  ],
  exitOnError: false
});

logger.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
};

app.use(morgan("combined", { "stream": logger.stream }));

// routes
app.use('/', routes);

let server;

// Create and start HTTP server.
server = http.createServer(app);

// Start the server with sequelize synced
model.init(config.database);
model.getModel().sequelize.sync().then( () => {
  server.listen(config.port);
  server.on('listening', () => {
    console.log(`API ===> 🐙  Express Server listening on ${config.express.host}:${config.express.port}`);
  });
});