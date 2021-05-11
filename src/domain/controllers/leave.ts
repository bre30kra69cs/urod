import {getFuck, createCommand} from '../../utils';

const command = createCommand('leave', async ({dm, ctx, log}) => {
  if (!ctx.chat?.id || !ctx.from?.id) {
    return;
  }

  log({
    fromId: ctx.from.id,
    chatId: ctx.chat.id,
  });

  await dm.removeUser(ctx.from.id, ctx.chat.id);
  await ctx.replyWithPhoto({
    source: getFuck(),
  });
});

export default command;
