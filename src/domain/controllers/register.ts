import {bold, createCommand} from '../../utils';

const message = (chatId: number) => {
  return `Чат ${bold(chatId)} быд зареган D:`;
};

const command = createCommand('register', (dataManager) => async (ctx) => {
  if (!ctx.chat?.id) {
    return;
  }

  await dataManager.addChat(ctx.chat.id);
  ctx.replyWithMarkdown(message(ctx.chat.id));
});

export default command;
