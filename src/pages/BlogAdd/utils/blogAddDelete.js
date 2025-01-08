export function blogAddDelete(array, i, value) {
  const newArray = [...array.slice(0, i), value, ...array.slice(i + 1)]
  return newArray
}
