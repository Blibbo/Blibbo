
// not readonly: not really safe. Good enough for my usecase
export type NonEmptyArray<T> = [T, ...T[]];

export function mapNonEmpty<T, U>(
  array: [T, ...T[]] | readonly [T, ...T[]],
  callback: (el: T) => U,
): NonEmptyArray<U> {
  return array.map(callback) as NonEmptyArray<U>;
}

export function assertNonEmpty<T>(
  array: T[],
  errorMessage: string = "Expected array to be non empty"
): asserts array is NonEmptyArray<T> {
  if(array.length < 1) throw new Error(errorMessage);
}