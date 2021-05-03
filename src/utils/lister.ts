export const createLister = <T>(
  init: T[] = [],
  options?: {
    onRemove: (value: T) => void;
  },
) => {
  let arr = [...init];

  const push = (value: T) => {
    arr.push(value);
  };

  const remove = (value: T) => {
    arr = arr.filter((item) => {
      const isStand = item !== value;
      if (!isStand) {
        options?.onRemove(item);
      }
    });
  };

  const len = () => {
    return arr.length;
  };

  return {
    push,
    remove,
    len,
  };
};
