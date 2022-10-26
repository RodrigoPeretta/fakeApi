import fs from 'fs';
import morgan from 'morgan';
import moment from 'moment';
import config from 'config';
import express from 'express';

var accessLogStream = fs.createWriteStream(config.get('logger'), { flags: 'a' })
const loggerConfig = express();

morgan.token('body', req => {
  return JSON.stringify(req.body)
})

morgan.token('params', req => {
  return JSON.stringify(req.params)
})

morgan.token('date', (req, res, tz) => {
  return moment().format('DD-MM-YYYY, HH:mm');
});

morgan.token('resp', (req, res, tz) => {
  return JSON.stringify(res.body)
});

loggerConfig.use(morgan(`[:date] :method :url | :status | :response-time ms | Params: :params Body: :body Resp: :resp`, 
{ 
  stream: accessLogStream, 
  skip: (req, res) => req.url === '/readLog' || req.url === '/clearLog'
}));


export default loggerConfig;

