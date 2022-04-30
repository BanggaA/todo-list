export interface CreateTaskDTO {
  title: string;
  description: string;
  status: string;
  date: Date;
}

export interface UpdateTaskDTO {
  title?: string;
  description?: string;
  status?: string;
  date?: Date;
}
export interface PaginationTaskDTO {
  page: number;
  size: number;
}
