import {config} from '../config';
import {createBot} from '../telegraf';
import {compose} from './compose';
import {Client} from '../types';

export const main = (db: Client) => {
  const bot = createBot(config.getToken());
  compose(bot, db);

  bot.launch({
    webhook: {
      domain: config.getHttpDomain(),
      port: config.getPort(),
    },
  });

  process.once('SIGINT', () => {
    bot.stop('SIGINT');
  });

  process.once('SIGTERM', () => {
    bot.stop('SIGTERM');
  });
};
