import {getName, getFucks, createCommand} from '../../utils';

const message = (author: string) => {
  return `${author} 🙈😁⚠️🤟👍🤝👯‍♂️👨‍👩‍👧‍👦 теперь я могу выбирать тебя *ПОПУЩЕННЫМ ДНЯ*...`;
};

const command = createCommand('join', async ({dm, ctx}) => {
  const name = getName(ctx.from?.first_name, ctx.from?.last_name, ctx.from?.username);

  if (!ctx.chat?.id || !ctx.from?.id || !name) {
    return;
  }

  const chatUsers = await dm.getChatUsers(ctx.chat.id);

  if (chatUsers.find((user) => user.id === ctx.from?.id)) {
    await ctx.replyWithPhoto({
      source: getFucks(),
    });
    return;
  }

  await dm.addUser(ctx.from.id, ctx.chat.id);
  await ctx.replyWithMarkdown(message(name));
});

export default command;
