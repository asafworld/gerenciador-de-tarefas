import { Dispatch, SetStateAction } from "react";
import IProject from "./IProject";

export default interface IContext {
  projects: IProject[] | undefined;
  setProject: Dispatch<SetStateAction<IProject[] | undefined>>;
  presentProject: IProject | undefined;
  setPresentProject: Dispatch<SetStateAction<IProject | undefined>>;
  errorMessage: string | undefined;
  setErrorMessage: Dispatch<SetStateAction<string | undefined>>;
}