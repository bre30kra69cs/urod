import {getFucks, createCommand} from '../../utils';

const command = createCommand('leave', async ({dm, ctx}) => {
  if (!ctx.chat?.id || !ctx.from?.id) {
    return;
  }

  await dm.removeUser(ctx.from.id, ctx.chat.id);
  await ctx.replyWithPhoto({
    source: getFucks(),
  });
});

export default command;
