import {SECOND} from '../consts';
import {TimeInterval} from '../types';

const createConfig = () => {
  const getToken = () => {
    return process.env.TOKEN ?? '';
  };

  const getPort = () => {
    return parseInt(process.env.PORT ?? '5000');
  };

  const getHttpDomain = () => {
    return process.env.HTTP_DOMAIN ?? '';
  };

  const getInterval = () => {
    return SECOND * 60;
  };

  const getPickTimeInterval = (): TimeInterval => {
    return [
      [0, 30],
      [0, 43],
    ];
  };

  return {
    getToken,
    getPort,
    getHttpDomain,
    getInterval,
    getPickTimeInterval,
  };
};

export const config = createConfig();
