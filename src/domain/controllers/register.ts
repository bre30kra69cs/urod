import {getResourceUrl, createCommand} from '../../utils';

const message = () => {
  return 'Ой ой ой, сучечки 😎❤️⚠️ Я бот *УРОД* и теперь в этом чатике я буду выбирать *ПОПУЩЕННОГО ДНЯ*. Делать это каждый день буду с 10 по 11 ч 😧😹👨👨‍🦲👩‍🦰❤️⚠️🐘🐉 Лаба Лаба Даб Даб!';
};

const command = createCommand('register', (dataManager) => async (ctx) => {
  if (!ctx.chat?.id) {
    return;
  }

  await dataManager.addChat(ctx.chat.id);
  await ctx.replyWithPhoto(getResourceUrl('rick.png'), {
    caption: message(),
  });
});

export default command;
