import {getFucks, createCommand} from '../../utils';

const command = createCommand('off', (dm) => async (ctx) => {
  if (!ctx.chat?.id) {
    return;
  }

  await dm.removeChat(ctx.chat.id);
  await ctx.replyWithPhoto({
    source: getFucks(),
  });
});

export default command;
