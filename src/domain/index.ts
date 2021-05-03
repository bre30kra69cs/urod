import {config} from '../config';
import {createBot} from '../telegraf';

export const main = () => {
  const bot = createBot(config.getToken());

  bot.command('info', (ctx) => {
    ctx.reply(`Ну даров, батёк! Я бот УРОД и мне ПОЕБАТЬ. Запомнил?
    Ну так если запомнил то не удивляйся что команды мне говорить лень.
    Скажу лишь, что рано или поздно, но ты станеш "хуемразью дня")`);
  });

  bot.command('daily', (ctx) => {
    ctx.reply(`${ctx.from.first_name} тебе интересно кто сегодня "хуемразь дня"???
    Глупышка, очевидно же что Максим...`);
  });

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
