import {getFuck, createCommand} from '../../utils';

const command = createCommand('off', async ({dm, ctx}) => {
  if (!ctx.chat?.id) {
    return;
  }

  await dm.removeChat(ctx.chat.id);
  await ctx.replyWithPhoto({
    source: getFuck(),
  });
});

export default command;
