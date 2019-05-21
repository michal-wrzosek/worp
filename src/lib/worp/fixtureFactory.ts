// *
// * fixtureFactory let's you quickly create lots of different records for your DB
// *

type FactoryInstruction = (index: number) => string | number;
export type FactoryInstructions<T> = { [key in keyof T]: FactoryInstruction };
type FixtureFactoryOptions = { nrOfRecordsToGenerate: number };

export const fixtureFactory = <T extends object>(
  factoryInstructions: FactoryInstructions<T>,
  { nrOfRecordsToGenerate }: FixtureFactoryOptions
) => {
  type Record = { [key in keyof T]: string | number };
  let records = [] as Record[];

  for (let index = 0; index < nrOfRecordsToGenerate; index++) {
    let record = {} as Record;

    for (const key in factoryInstructions) {
      const factoryFunction = factoryInstructions[key];
      const value = factoryFunction(index);
      record[key] = value;
    }
    records.push(record);
  }

  return records;
};
