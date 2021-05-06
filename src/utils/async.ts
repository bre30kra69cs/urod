interface All {
  <T>(promises: Promise<T>[]): Promise<T[]>;
  <T1>(promises: [Promise<T1>]): Promise<[T1]>;
  <T1, T2>(promises: [Promise<T1>, Promise<T2>]): Promise<[T1, T2]>;
  <T1, T2, T3>(promises: [Promise<T1>, Promise<T2>, Promise<T3>]): Promise<[T1, T2, T3]>;
  (promises: Promise<unknown>[]): Promise<unknown[]>;
}

export const all: All = (promises: any[]): any => {
  return Promise.all(promises);
};
