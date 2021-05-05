import {getResourceUrl, createCommand} from '../../utils';

const message = () => {
  return 'Ой ой ой, сучечки 😎❤️⚠️ Я бот *УРОД* и теперь в этом чатике я буду выбирать *ПОПУЩЕННОГО ДНЯ*. Делать это буду каждый день с 10 по 11 ч 😧😹👨👨‍🦲👩‍🦰❤️⚠️🐘🐉 Лаба Лаба Даб Даб!';
};

const messageIsHere = (name?: string) => {
  return `Он собрадся меня включить... *ХА!* Вы только посмотрите на этого клоуна 🤡🤡🤡🤹🤹 *${name}* 😝🤩😂🤣`;
};

const command = createCommand('on', (dm) => async (ctx) => {
  if (!ctx.chat?.id) {
    return;
  }

  const chats = await dm.getChats();

  if (chats.find(({id}) => id === ctx.chat!.id)) {
    ctx.replyWithMarkdown(messageIsHere(ctx.from?.username));
    return;
  }

  await dm.addChat(ctx.chat.id);
  await ctx.replyWithPhoto(
    {
      source: getResourceUrl('rick.png'),
    },
    {
      caption: message(),
      parse_mode: 'Markdown',
    },
  );
});

export default command;
