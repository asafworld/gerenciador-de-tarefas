export default interface IProject {
  projectLabel: string;
  description: string | undefined;
  projectId: number;
  percent: number;
  concluded: boolean;
}