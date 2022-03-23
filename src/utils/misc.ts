export const formatThreadId = (id?: number) => {
  return '#' + (id ?? 0).toString().padStart(6, '0')
}

export const getColorFromNumber = (n: number) => {
  return '#' + n.toString(16).slice(2)
}
