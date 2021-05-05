import {getResourceUrl, createCommand} from '../../utils';

const message = () => {
  return 'Ой ой ой, сучечки 😎❤️⚠️ Я бот *УРОД* и теперь в этом чатике я буду выбирать *ПОПУЩЕННОГО ДНЯ*. Делать это буду каждый день с 10 по 11 ч 😧😹👨👨‍🦲👩‍🦰❤️⚠️🐘🐉 Лаба Лаба Даб Даб!';
};

const command = createCommand('register', (dm) => async (ctx) => {
  if (!ctx.chat?.id) {
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
