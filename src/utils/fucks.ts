import {getResourceUrl} from './public';
import {getRandomFrom} from './random';

export const getFucks = () => {
  return getRandomFrom([
    getResourceUrl('fuck.jpeg'),
    getResourceUrl('fuck1.png'),
    getResourceUrl('fuck2.jpeg'),
  ]);
};
