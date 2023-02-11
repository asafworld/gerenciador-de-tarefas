import ITask from "../Entities/Interfaces/ITask"

export default function getPercentage(tasks: ITask[] | null | undefined) {
  if (tasks) {
    const length = tasks.length;
    if (length === 0) return 'Nenhuma tarefa aqui!'
    const concluded = (tasks.filter((task) => task.concluded)).length
    const percent = concluded / length
    const result = percent * 100
    return `${result.toFixed(2)}% concluído`
  }
  return 'Nenhuma tarefa aqui!'
}