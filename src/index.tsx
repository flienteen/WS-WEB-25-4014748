export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I,
  ) => void
  ? I
  : never;

export type UnionToTuple<T> = UnionToIntersection<T extends never ? never : (t: T) => T> extends (
    _: never,
  ) => infer W
  ? [...UnionToTuple<Exclude<T, W>>, W]
  : [];

type Demo = {
  key1?: string,
  'a': 1,
  'key5'?: string,
  b?: 2,
  'key2': number;
} & { p: null | number }

type DemoKeys = UnionToTuple<keyof Demo>
export const domoKeys: DemoKeys = ['key1', 'a', 'key5', 'b', 'key2', 'p'];
