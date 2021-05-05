export const getName = (firstName?: string, lastName?: string, username?: string) => {
  return [firstName, lastName, username]
    .filter(Boolean)
    .map((item, _, arr) => (item === username && arr.length > 1 ? `(${item})` : item))
    .join(' ');
};
