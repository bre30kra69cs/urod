import {createMapper} from './mapper';
import {SECOND} from '../consts';

const INTERVAL = 60 * SECOND;

type Listner = () => void;

type Id = NodeJS.Timeout;

export const createTimer = (interval = INTERVAL) => {
  const mapper = createMapper<Id, Listner>();

  const push = (listner: Listner) => {
    const id = setInterval(listner, interval);
    mapper.set(id, listner);
    return id;
  };

  const rempoveById = (id: Id) => {
    clearInterval(id);
    mapper.remove(id);
  };

  const removeByListner = (listner: Listner) => {
    const keys = mapper.getKeys(listner);
    keys.forEach(rempoveById);
  };

  return {
    push,
    rempoveById,
    removeByListner,
  };
};
