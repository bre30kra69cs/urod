import {Context, Telegraf} from 'telegraf';

import {DataManager} from '../types';

export const createCommand = (
  value: string,
  fn: (dataManager: DataManager) => (ctx: Context) => void,
) => (bot: Telegraf, dataManager: DataManager) => {
  bot.command(value, fn(dataManager));
};

export const createTimeChatMessage = (fn: (bot: Telegraf) => string | undefined) => (
  bot: Telegraf,
) => () => {
  const message = fn(bot);

  if (!bot.context.chat?.id || !message) {
    return;
  }

  bot.telegram.sendMessage(bot.context.chat.id, message);
};
