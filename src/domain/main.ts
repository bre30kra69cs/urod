import {Client} from 'pg';
import {Telegraf} from 'telegraf';

import {config} from '../config';
import {compose} from './compose';

export const main = (db: Client) => {
  const bot = new Telegraf(config.getToken());
  compose(bot, db);

  bot.launch({
    webhook: {
      domain: config.getHttpDomain(),
      port: config.getPort(),
    },
  });

  process.once('SIGINT', async () => {
    await db.end();
    bot.stop('SIGINT');
  });

  process.once('SIGTERM', async () => {
    await db.end();
    bot.stop('SIGTERM');
  });
};
