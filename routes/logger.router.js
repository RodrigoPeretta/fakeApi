import express from 'express';
import loggerController from "../controller/logger.controller.js";

const loggerRouter = express.Router();

loggerRouter.get('/readLog', loggerController.readLog)
            .delete('/clearLog', loggerController.clearLog)

export default loggerRouter;