# worp - fixtures factory / generator

### Installation

To install this package:

```bash
npm install worp
```

If you use Typescript you don't need to download anything else. Typescript will be automatically loaded.

### Example use

**Javascript:**

```typescript
import { fixtureFactory } from "worp";

const factoryInstructions = {
  a: index => `property A, record nr: ${index + 1}`,
  b: index => index + 1,
  c: () =>
    `property C, random integer from 1 to 10: ${Math.ceil(Math.random() * 10)}`
};

const records = fixtureFactory(factoryInstructions, {
  nrOfRecordsToGenerate: 100
});
```

**Typescript:**

```typescript
import { fixtureFactory, FactoryInstructions } from "worp";

type ExampleProps = {
  a: string;
  b: number;
  c: string;
};

const factoryInstructions: FactoryInstructions<ExampleProps> = {
  a: index => `property A, record nr: ${index + 1}`,
  b: index => index + 1,
  c: () =>
    `property C, random integer from 1 to 10: ${Math.ceil(Math.random() * 10)}`
};

const records = fixtureFactory(factoryInstructions, {
  nrOfRecordsToGenerate: 100
});
```

This code will generate 100 objects like this:

```
[
  {
    a: "property A, record nr: 1",
    b: 1,
    c: "property C, random integer from 1 to 10: 3",
  },
  {
    a: "property A, record nr: 2",
    b: 2,
    c: "property C, random integer from 1 to 10: 6",
  },
  ... (98 more like this)
]
```

---

This package was created out of this boilerplate:
https://github.com/michal-wrzosek/react-component-lib
