import {config} from '../config';
import {createBot} from '../telegraf';
import {compose} from './compose';

export const main = () => {
  const bot = createBot(config.getToken());
  compose(bot);

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
