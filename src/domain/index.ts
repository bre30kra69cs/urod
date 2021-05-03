import {config} from '../config';
import {createBot} from '../telegraf';
import 'dotenv';

export const main = () => {
  const bot = createBot(config.getToken());

  bot.hears('token', (ctx) => {
    ctx.reply(config.getToken());
  });

  bot.launch({
    webhook: {
      domain: 'http://urod-bot.herokuapp.com/',
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
