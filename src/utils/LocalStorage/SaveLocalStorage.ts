import IProject from "../../Entities/Interfaces/IProject";

export default function saveLocalStorage(type: string, state: IProject[] | IProject) {
  switch (type) {
    case 'projects':
      localStorage.setItem(type, JSON.stringify(state));
      break;
    case 'presentProject':
      localStorage.setItem(type, JSON.stringify(state));
      break;
    default:
      break;
  }
}