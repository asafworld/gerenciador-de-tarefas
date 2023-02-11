export default interface ITask {
  taskId: number;
  taskLabel: string;
  taskDescription: string;
  taskOwner: string;
  createdAt: string | null;
  finishedAt: string | null;
  concluded: boolean;
  subtasks: {
    toDo: string[] | null,
    concluded: string[] | null,
  }
}