import { body, param } from 'express-validator';
import { validationMw } from '../middlewares/validation.middleware';

export class TasksValidation {
  taskId = [param('taskId').isNumeric({ no_symbols: true }), validationMw];

  createTask = [
    body('title').isString(),
    body('description').isString(),
    body('status').isString(),
    body('date').isDate(),
    validationMw,
  ];

  updateTask = [
    param('taskId').isNumeric({ no_symbols: true }),
    body('title').isString().optional(),
    body('description').isString().optional(),
    body('status').isString().optional(),
    body('date').isDate().optional(),
    validationMw,
  ];

  PaginationTaskDTO = [
    body('page').isNumeric({ no_symbols: true }),
    body('size').isNumeric({ no_symbols: true }),
  ];
}

export default new TasksValidation();
