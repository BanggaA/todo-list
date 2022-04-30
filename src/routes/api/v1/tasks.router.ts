import { Router } from 'express';
import tasksController from '../../../controllers/tasks.controller';
import tasksValidataion from '../../../validations/tasks.validataion';

export const tasksRoutes = Router();

tasksRoutes
  .post('/', tasksValidataion.createTask, tasksController.createTask)
  //.get('/', tasksController.getTasks)
  .get('/:taskId', tasksValidataion.taskId, tasksController.getById)
  .patch('/:taskId', tasksValidataion.updateTask, tasksController.updateTask)
  .delete('/:taskId', tasksValidataion.taskId, tasksController.deleteTask);
