import {Context, Telegraf} from 'telegraf';

import {DataManager} from '../types';
import {error} from './logger';

export const createCommand = (
  commandName: string,
  fn: (dataManager: DataManager) => (ctx: Context) => Promise<void>,
) => (bot: Telegraf, dataManager: DataManager) => {
  const target = fn(dataManager);
  bot.command(commandName, async (ctx) => {
    try {
      await target(ctx);
    } catch (err) {
      error(commandName, err);
    }
  });
};
