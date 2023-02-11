import ITask from './ITask';

export default interface IProject {
  projectId: number;
  projectLabel: string;
  description: string;
  finishedAt: string;
  tasks: ITask[] | null;
  percent: number;
  concluded: boolean;
}