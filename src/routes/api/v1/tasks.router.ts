import { Router } from 'express';
import tasksController from '../../../controllers/tasks.controller';

export const tasksRoutes = Router();

tasksRoutes
  .post('/', tasksController.createTask)
  .get('/', tasksController.getTasks)
  .get('/:taskId', tasksController.getById)
  .patch('/:taskId', tasksController.updateTask)
  .delete('/:taskId', tasksController.deleteTask);
