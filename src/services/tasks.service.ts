import { db } from '../models';
import { CreateTaskDTO, PaginationTaskDTO, UpdateTaskDTO } from '../dtos/task.dto';
import createHttpError from 'http-errors';

export class TasksService {
  constructor(private database: typeof db) {}

  async createTask(createTaskDTO: CreateTaskDTO) {
    const { title, description, status, date } = createTaskDTO;
    const newTask = await this.database.Task.create({ title, description, status, date });
    return newTask;
  }

  // async getTasks() {
  //   const tasks = await this.database.Task.findAll({});
  //   return tasks;
  // }

  async getTasks(paginationTaskDTO: PaginationTaskDTO) {
    let [page, size] = [Number(paginationTaskDTO.page), Number(paginationTaskDTO.size)];
    if (size <= 5) size = 5;
    if (page <= 1) page = 1;
    const tasks = await this.database.Task.findAndCountAll({
      offset: (page - 1) * size,
      limit: size,
    });
    const { rows: results, count } = tasks;
    return {
      page,
      size,
      count,
      results,
    };
  }

  async getTaskById(taskId: number) {
    const task = await this.database.Task.findByPk(taskId);
    if (!task) throw createHttpError(404, 'Task not found');
    return task;
  }

  async updateTask(taskId: number, updateTaskDTO: UpdateTaskDTO) {
    const task = await this.database.Task.findByPk(taskId);
    if (!task) throw createHttpError(404, 'Task not found');

    const { title, description, status, date } = updateTaskDTO;
    const updateTask = await this.database.Task.update(
      { title, description, status, date },
      { where: { id: taskId } },
    );

    return updateTask;
  }

  async deleteTask(taskId: number) {
    const task = await this.database.Task.findByPk(taskId);
    if (!task) throw createHttpError(404, 'Task not found');

    const deleteTask = await this.database.Task.destroy({ where: { id: taskId } });
    return deleteTask;
  }
}

export default new TasksService(db);
