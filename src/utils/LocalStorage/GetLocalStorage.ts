export default function getLocalStorage(type: string) {
  const state = localStorage.getItem(type);
  if (state) {
    return JSON.parse(state)
  } else {
    return undefined
  }
}