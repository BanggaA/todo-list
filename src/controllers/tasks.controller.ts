import expressAsyncHandler from 'express-async-handler';
import tasksService, { TasksService } from '../services/tasks.service';
import { CreateTaskDTO, PaginationTaskDTO, UpdateTaskDTO } from '../dtos/task.dto';

type TaskControllerId = { taskId: string };

export class TasksController {
  constructor(private readonly taskServices: TasksService) {}

  createTask = expressAsyncHandler<any, any, CreateTaskDTO>(async (req, res) => {
    const newTask = await this.taskServices.createTask(req.body);
    res.status(201).json(newTask);
  });

  getTasks = expressAsyncHandler<any, any, PaginationTaskDTO>(async (req, res) => {
    const tasks = await this.taskServices.getTasks(req.body);
    res.status(200).json(tasks);
  });

  getTaskById = expressAsyncHandler<TaskControllerId>(async (req, res) => {
    const task = await this.taskServices.getTaskById(parseInt(req.params.taskId));
    res.status(200).json(task);
  });

  updateTask = expressAsyncHandler<TaskControllerId, any, UpdateTaskDTO>(async (req, res) => {
    await this.taskServices.updateTask(parseInt(req.params.taskId), req.body);
    res.status(204).json();
  });

  deleteTask = expressAsyncHandler<TaskControllerId>(async (req, res) => {
    await this.taskServices.deleteTask(parseInt(req.params.taskId));
    res.status(204).json();
  });
}
export default new TasksController(tasksService);
