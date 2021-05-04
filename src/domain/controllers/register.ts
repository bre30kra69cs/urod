import {createCommand} from '../../utils';

const errorMessage = () => {
  return 'Ошибка полученя chatId :(';
};

const command = createCommand('register', (dataManager) => async (ctx) => {
  if (!ctx.chat?.id) {
    ctx.reply(errorMessage());
    return;
  }

  await dataManager.addChat(ctx.chat.id);
});

export default command;
