import {Time, TimeInterval, Compare} from '../types';

export const getDateTime = () => {
  return new Date(Date.now());
};

export const getTime = (): Time => {
  const datetime = getDateTime();
  const hours = datetime.getHours();
  const minutes = datetime.getMinutes();
  return {
    hours,
    minutes,
  };
};

export const compareTime = (source: Time, target: Time) => {
  if (source.hours > target.hours) {
    return Compare.Bg;
  } else if (source.hours === target.hours) {
    if (source.minutes === target.minutes) {
      return Compare.Eq;
    } else if (source.minutes > target.minutes) {
      return Compare.Bg;
    } else {
      return Compare.Sm;
    }
  } else {
    return Compare.Sm;
  }
};

export const isStrictBeforeTime = (source: Time, target: Time) => {
  const compare = compareTime(source, target);
  return compare === Compare.Sm;
};

export const isStrictAfterTime = (source: Time, target: Time) => {
  const compare = compareTime(source, target);
  return compare === Compare.Bg;
};

export const isSameTime = (source: Time, target: Time) => {
  const compare = compareTime(source, target);
  return compare === Compare.Eq;
};

export const isBeforeTime = (source: Time, target: Time) => {
  return isStrictBeforeTime(source, target) || isSameTime(source, target);
};

export const isAfterTime = (source: Time, target: Time) => {
  return isStrictAfterTime(source, target) || isSameTime(source, target);
};

export const isInIntervalTime = (source: TimeInterval, target: Time) => {
  const {start, end} = source;
  return isBeforeTime(start, target) && isAfterTime(end, target);
};

export const formateTime = (time: Time) => {
  return `${time.hours}:${time.minutes}`;
};
