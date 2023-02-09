export default interface ITask {
  projectId: number;
  taskId: number;
  task: string;
  taskOwner: string;
  createdAt: Date | null;
  finishedAt: Date | null;
  concluded: boolean;
  subtasks: {
    toDo: string[],
    concluded: string[],
  }
}