export function requireStringContains(got: string, substr: string): void {
  if (!got.includes(substr)) {
    throw new Error(`expected "${got}" to contain "${substr}"`);
  }
}

export function requireStringNotContains(got: string, substr: string): void {
  if (got.includes(substr)) {
    throw new Error(`expected "${got}" to NOT contain "${substr}"`);
  }
}
