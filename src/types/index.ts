export {Context, Telegraf} from 'telegraf';

export interface Time {
  hours: number;
  minutes: number;
}

export interface TimeInterval {
  start: Time;
  end: Time;
}

export enum Compare {
  Bg = 'Bg',
  Eq = 'Eq',
  Sm = 'Sm',
}
