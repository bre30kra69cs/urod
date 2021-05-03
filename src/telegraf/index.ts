import {Telegraf} from 'telegraf';

export const createBot = (token: string) => {
  return new Telegraf(token);
};
