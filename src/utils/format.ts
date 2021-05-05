export const getName = (firstNname?: string, lastName?: string, username?: string) => {
  return [firstNname, lastName, username]
    .filter(Boolean)
    .map((item, _, arr) => (item === username && arr.length > 1 ? `(${item})` : item))
    .join(' ');
};
