export const isOutSide = (value: number, min: number | null, max: number | null) => {
  const minValue = min !== null ? value < min : false
  const maxValue = max !== null ? value > max : false

  return minValue || maxValue
}

export const isOutSideOrEqual = (value: number, min: number | null, max: number | null) => {
  const minValue = min !== null ? value <= min : false
  const maxValue = max !== null ? value >= max : false

  return minValue || maxValue
}
