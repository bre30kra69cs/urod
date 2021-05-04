import {Telegraf} from '../types';
import daily from './controllers/daily';
import info from './controllers/info';

const commands = [daily, info];

export const compose = (bot: Telegraf) => {
  commands.forEach((command) => command(bot));
  bot.command('test', (ctx) => {
    ctx.reply(String(bot.context.chat?.id));
  });
};
