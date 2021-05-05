import path from 'path';

const PUBLIC_PATH = path.resolve(__dirname, 'public');

export const getResourceUrl = (file: string) => {
  return `${PUBLIC_PATH}/${file}`;
};
