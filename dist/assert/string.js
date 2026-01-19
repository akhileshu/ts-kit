export function requireStringContains(got, substr) {
    if (!got.includes(substr)) {
        throw new Error(`expected "${got}" to contain "${substr}"`);
    }
}
export function requireStringNotContains(got, substr) {
    if (got.includes(substr)) {
        throw new Error(`expected "${got}" to NOT contain "${substr}"`);
    }
}
//# sourceMappingURL=string.js.map