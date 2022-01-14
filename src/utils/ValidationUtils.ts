export function validateRange(
  value: number,
  lower: number,
  upper: number,
  fieldName: string
) {
  if (value < lower || value > upper) {
    throw new Error(`${fieldName} must be between ${lower} and ${upper}`);
  }
}
