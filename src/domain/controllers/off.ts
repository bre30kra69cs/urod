import {getFuck, createCommand} from '../../utils';

const command = createCommand('off', async ({dm, ctx, log}) => {
  if (!ctx.chat?.id) {
    return;
  }

  log({
    chatId: ctx.chat.id,
  });

  await dm.removeChat(ctx.chat.id);
  await ctx.replyWithPhoto({
    source: getFuck(),
  });
});

export default command;
