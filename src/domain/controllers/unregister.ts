import {getResourceUrl, createCommand} from '../../utils';

const command = createCommand('unregister', (dm) => async (ctx) => {
  if (!ctx.chat?.id) {
    return;
  }

  await dm.removeChat(ctx.chat.id);
  await ctx.replyWithPhoto({
    source: getResourceUrl('fuck.jpeg'),
  });
});

export default command;
