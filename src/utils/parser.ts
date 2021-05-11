export const parseNumber = (value: unknown) => {
  return Number(value);
};

export const parseString = (value: unknown) => {
  return String(value);
};

type ToScheme<T> = {
  [K in keyof T]: (value: unknown) => T[K];
};

export const parser = <T>(scheme: ToScheme<T>) => (data: any = {}) => {
  return Object.keys(scheme)
    .map((key: any) => {
      const fn = scheme[key as keyof T];
      const result = fn?.(data?.[key as string]);
      return result ? {[key]: result} : {};
    })
    .reduce((acc, next) => {
      return {
        ...acc,
        ...next,
      };
    }, {} as T);
};
