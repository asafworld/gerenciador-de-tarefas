export default function getTheDate() {
  const date = new Date();
  return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
}