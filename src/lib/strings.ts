type ConversionEntry = readonly [from: string, to: string];

type ConversionMap = readonly ConversionEntry[];

export type ConvertStringPrefix<
  S extends string,
  Entries extends ConversionMap
> = Entries extends readonly [
  readonly [infer From extends string, infer To extends string],
  ...infer Rest extends ConversionMap
]
  ? S extends `${From}${infer Tail}`
    ? `${To}${Tail}`
    : ConvertStringPrefix<S, Rest>
  : never;
  // : S;

export function convertStringPrefix<
  S extends string,
  const Entries extends ConversionMap
>(input: S, entries: Entries): ConvertStringPrefix<S, Entries> {
  for (const [from, to] of entries) {
    if (input.startsWith(from)) {
      return (to + input.slice(from.length)) as ConvertStringPrefix<S, Entries>;
    }
  }
  throw new Error(`String ${input} has incorrect prefix.`);
  // return input as ConvertStringPrefix<S, Entries>;
}

type test = ConvertStringPrefix<"ciao" | "ciai", readonly [
  readonly ["cia", "babubu"]
]>;

const test2 = convertStringPrefix("ciao", [
  ["cia", "babubu"] as const
] as const);