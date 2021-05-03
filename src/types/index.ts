export {Context, Telegraf} from 'telegraf';

export type Time = [number, number];

export type TimeInterval = [Time, Time];

export enum Compare {
  Bg = 'Bg',
  Eq = 'Eq',
  Sm = 'Sm',
}
