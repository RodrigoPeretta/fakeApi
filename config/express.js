import express from 'express';
import bodyParser from 'body-parser';
import config from 'config';

import loggerConfig from '../log/logger.js';
import mainRouter from '../routes/main.router.js';
import loggerRouter from '../routes/logger.router.js';

const app = express();
app.set('port', process.env.PORT || config.get('server.port'));

app.use(bodyParser.json());

app.use(loggerConfig);

app.use(mainRouter);
app.use(loggerRouter);

export default app;