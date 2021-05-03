const SCALE = 1000;

export const getRandom = (scale = SCALE) => {
  return Math.round(Math.random() * scale);
};

export const getRandomFrom = <T>(arr: T[]) => {
  const index = getRandom(arr.length * SCALE) % arr.length;
  return arr[index];
};
