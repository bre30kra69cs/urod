import {getName, getRandomFrom, getResourceUrl, createCommand} from '../../utils';

const message = (author: string) => {
  return `${author} 🙈😁⚠️🤟👍🤝👯‍♂️👨‍👩‍👧‍👦 теперь я могу выбирать тебя *ПОПУЩЕННЫМ* дня...`;
};

const command = createCommand('join', (dm) => async (ctx) => {
  const name = getName(ctx.from?.first_name, ctx.from?.last_name, ctx.from?.username);

  if (!ctx.chat?.id || !ctx.from?.id || !name) {
    return;
  }

  const chatUsers = await dm.getChatUsers(ctx.chat.id);

  if (chatUsers.find((user) => user.id === ctx.from?.id)) {
    await ctx.replyWithPhoto({
      source: getRandomFrom([
        getResourceUrl('fuck.jpeg'),
        getResourceUrl('fuck1.png'),
        getResourceUrl('fuck2.jpeg'),
      ]),
    });
    return;
  }

  await dm.addUser(ctx.from.id, ctx.chat.id);
  await ctx.replyWithMarkdown(message(name));
});

export default command;
