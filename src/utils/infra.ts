import {Context, Telegraf} from '../types';

export const createCommand = (value: string, fn: (ctx: Context) => void) => (bot: Telegraf) => {
  bot.command(value, fn);
};
