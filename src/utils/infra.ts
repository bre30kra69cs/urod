import {Context, Telegraf} from '../types';

export const createCommand = (value: string, fn: (ctx: Context) => void) => (bot: Telegraf) => {
  bot.command(value, fn);
};

export const createTimeChatMessage = (fn: (bot: Telegraf) => string | undefined) => (
  bot: Telegraf,
) => () => {
  const message = fn(bot);

  if (!bot.context.chat?.id || !message) {
    return;
  }

  if (message) {
    bot.telegram.sendMessage(bot.context.chat.id, message);
  }
};
