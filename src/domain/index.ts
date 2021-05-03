import {config} from '../config';
import {createBot} from '../telegraf';

export const main = () => {
  const token = config.getToken();

  if (!token) {
    return;
  }

  const bot = createBot(token);

  bot.hears('token', (ctx) => {
    ctx.reply(token);
  });

  bot.launch();

  process.once('SIGINT', () => {
    bot.stop('SIGINT');
  });

  process.once('SIGTERM', () => {
    bot.stop('SIGTERM');
  });
};
