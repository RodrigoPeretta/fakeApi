import express from 'express';
import mainController from "../controller/main.controller.js";

const mainRouter = express.Router();

mainRouter.get('/random', mainController.random)
          .get('/random/:id', mainController.random)
          .post('/postNumber', mainController.postNumber)

export default mainRouter;