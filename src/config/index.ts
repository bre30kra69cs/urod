import {DateTime, Interval} from 'luxon';
import {SECOND} from '../consts';

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

  const getPickTimeInterval = () => {
    return Interval.fromDateTimes(
      DateTime.fromObject({
        hour: 11,
        minute: 0,
      }),
      DateTime.fromObject({
        hour: 12,
        minute: 0,
      }),
    );
  };

  const getDbUrl = () => {
    return process.env.DATABASE_URL ?? '';
  };

  return {
    getToken,
    getPort,
    getHttpDomain,
    getInterval,
    getPickTimeInterval,
    getDbUrl,
  };
};

export const config = createConfig();
