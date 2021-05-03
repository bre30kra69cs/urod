export const createMapper = <K, V>(init: [K, V][] = []) => {
  const map = new Map<K, V>(init);

  const set = (key: K, value: V) => {
    map.set(key, value);
  };

  const get = (key: K) => {
    return map.get(key);
  };

  const remove = (key: K) => {
    map.delete(key);
  };

  const toList = () => {
    return Array.from(map.entries());
  };

  const getKeys = (value: V) => {
    const entries = toList();
    return entries.filter(([, item]) => item === value).map(([key]) => key);
  };

  return {
    set,
    get,
    remove,
    toList,
    getKeys,
  };
};
