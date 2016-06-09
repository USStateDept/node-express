import express from 'express';
import morgan from 'morgan';
import winston from 'winston';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes';
import config from './config';
import model from './routes/models';

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
app.use('/api', routes);

// Start the server with sequelize synced
model.init(config.database);
model.getModel().sequelize.sync().then( () => {
  const server = app.listen(config.port, () => {
    console.log(`API ===> 🐙  Express Server listening on ${config.express.host}:${config.express.port}`);
  });
});