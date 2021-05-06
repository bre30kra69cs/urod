export const last = <T>(arr: T[] = []) => {
  return arr[arr.length - 1];
};

export const head = <T>(arr: T[] = []) => {
  return arr[0];
};

export const tail = <T>(arr: T[] = []) => {
  const [, ...rest] = arr;
  return rest;
};
