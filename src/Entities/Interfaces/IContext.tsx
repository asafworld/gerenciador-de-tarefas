import { Dispatch, SetStateAction } from "react";
import IProject from "./IProject";
import ITask from "./ITask";

export default interface IContext {
  projects: IProject[] | undefined;
  setProject: Dispatch<SetStateAction<IProject[] | undefined>>;
  tasks: ITask[] | undefined;
  setTask: Dispatch<SetStateAction<ITask[] | undefined>>
  presentProject: IProject | undefined;
  setPresentProject: Dispatch<SetStateAction<IProject | undefined>>;
}