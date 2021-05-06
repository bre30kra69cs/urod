import {Context, Telegraf} from 'telegraf';

import {DataManager, Api} from '../types';
import {error} from './logger';

export const createCommand = (
  commandName: string,
  fn: (services: {dm: DataManager; api: Api; ctx: Context}) => Promise<void>,
) => (bot: Telegraf, dm: DataManager, api: Api) => {
  bot.command(commandName, async (ctx) => {
    try {
      await fn({dm, api, ctx});
    } catch (err) {
      error(commandName, err);
    }
  });
};
