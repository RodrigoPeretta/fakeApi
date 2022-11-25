import express from 'express';
import mainController from "../controller/main.controller.js";
import multer from 'multer';

const mainRouter = express.Router();

mainRouter.get('/random', mainController.random)
          .get('/random/:id', mainController.random)
          .post('/postNumber', mainController.postNumber)
          .post('/postNumber/multipart', multer().none(), mainController.postNumberMultiPart)


export default mainRouter;