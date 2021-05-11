import {Context, Telegraf} from 'telegraf';
import cron from 'node-cron';

import {DataManager, Api} from '../types';
import {info, error} from './logger';

export const createCommand = (
  commandName: string,
  fn: (services: {
    dm: DataManager;
    api: Api;
    ctx: Context;
    log: (data: unknown) => void;
  }) => Promise<void>,
) => (bot: Telegraf, dm: DataManager, api: Api) => {
  const log = (data: unknown) => {
    info({
      type: 'command',
      name: commandName,
      data,
    });
  };

  bot.command(commandName, async (ctx) => {
    try {
      log({
        chat: ctx.chat,
        from: ctx.from,
        message: ctx.message,
        state: ctx.state,
      });

      await fn({dm, api, ctx, log});
    } catch (err) {
      error(commandName, err);
    }
  });
};

export const createSchedule = (
  scheduleName: string,
  times: string[],
  fn: (services: {
    dm: DataManager;
    api: Api;
    bot: Telegraf;
    log: (data: unknown) => void;
  }) => Promise<void>,
) => (bot: Telegraf, dm: DataManager, api: Api) => {
  const log = (data: unknown) => {
    info({
      type: 'schedule',
      name: scheduleName,
      data,
    });
  };

  times.forEach((time) =>
    cron.schedule(time, async () => {
      if (!cron.validate(time)) {
        error(scheduleName, 'cron time not validate!');
        return;
      }

      try {
        log({
          chat: bot.context.chat,
          from: bot.context.from,
          message: bot.context.message,
          state: bot.context.state,
        });

        await fn({dm, api, bot, log});
      } catch (err) {
        error(scheduleName, err);
      }
    }),
  );
};
