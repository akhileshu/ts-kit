export async function readAtLeast(reader, n) {
    const chunks = [];
    let total = 0;
    while (total < n) {
        const { value, done } = await reader.read();
        if (done || !value) {
            throw new Error("stream ended early");
        }
        chunks.push(value);
        total += value.length;
    }
    return Uint8Array.from(chunks.flatMap(c => [...c])).slice(0, n);
}
//# sourceMappingURL=readAtLeast.js.map