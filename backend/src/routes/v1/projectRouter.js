import express from 'express';
import { projectController } from '../../controller/projectController.js';

const projectRouter= express.Router();

projectRouter.post('/', projectController)

export default projectRouter;