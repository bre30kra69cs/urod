import {Context, Telegraf} from 'telegraf';
import cron from 'node-cron';

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

export const createSchedule = (
  scheduleName: string,
  time: string,
  fn: (services: {dm: DataManager; api: Api; bot: Telegraf}) => Promise<void>,
) => (bot: Telegraf, dm: DataManager, api: Api) => {
  cron.schedule(time, async () => {
    if (!cron.validate(time)) {
      error(scheduleName, 'cron time not validate!');
      return;
    }

    try {
      await fn({dm, api, bot});
    } catch (err) {
      error(scheduleName, err);
    }
  });
};
