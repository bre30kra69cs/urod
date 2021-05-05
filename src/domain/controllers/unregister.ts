import {getResourceUrl, createCommand} from '../../utils';

const command = createCommand('unregister', (dataManager) => async (ctx) => {
  if (!ctx.chat?.id) {
    return;
  }

  await dataManager.removeChat(ctx.chat.id);
  await ctx.replyWithPhoto({
    source: getResourceUrl('fuck.jpeg'),
  });
});

export default command;
