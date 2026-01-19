# ts-kit

## usage
```json
  "dependencies": {
    "@akhileshu/ts-kit": "github:akhileshu/ts-kit"
  },
```

```ts
import { requireStringContains } from "@akhileshu/ts-kit";

describe("parseObject", () => {
  it("parses empty object", () => {
    const greeting = "hello world";
    requireStringContains(greeting, "hello");
  });
});

```
