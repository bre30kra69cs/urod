import {getName, createCommand} from '../../utils';

const message = (author: string) => {
  return `${author}, теперь я могу выбирать тебя *ПОПУЩЕННЫМ* дня...`;
};

const command = createCommand('join', (dm) => async (ctx) => {
  const name = getName(ctx.from?.first_name, ctx.from?.last_name, ctx.from?.username);

  if (!ctx.chat?.id || !ctx.from?.id || !name) {
    return;
  }

  await dm.addUser(ctx.from.id, ctx.chat.id);
  await ctx.replyWithMarkdown(message(name));
});

export default command;
