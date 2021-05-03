import {config} from '../config';
import {createBot} from '../telegraf';

const bot = createBot(config.getToken());

bot.hears('token', (ctx) => {
  ctx.reply(config.getToken());
});

bot.launch();

process.once('SIGINT', () => {
  bot.stop('SIGINT');
});

process.once('SIGTERM', () => {
  bot.stop('SIGTERM');
});
