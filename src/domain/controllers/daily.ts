import {createCommand} from '../../utils';

const message = (author = '', target = '') => {
  if (!author && !target) {
    return 'Пока что никто, анончик...';
  }

  if (!author) {
    return `Конечно же это ${target}...`;
  }

  return `${author} 😍❤️❤️😍😍😎😎👍 тебе интересно кто сегодня был попущен ??? Глупышка, очевидно же что это ${target}...`;
};

const command = createCommand('daily', (ctx) => {
  ctx.reply(message(ctx.from?.first_name, ctx.from?.first_name));
});

export default command;
