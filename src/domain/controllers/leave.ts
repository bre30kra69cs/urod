import {getResourceUrl, getRandomFrom, createCommand} from '../../utils';

const command = createCommand('leave', (dm) => async (ctx) => {
  if (!ctx.chat?.id || !ctx.from?.id) {
    return;
  }

  await dm.removeUser(ctx.from.id, ctx.chat.id);
  await ctx.replyWithPhoto({
    source: getRandomFrom([
      getResourceUrl('fuck.jpeg'),
      getResourceUrl('fuck1.png'),
      getResourceUrl('fuck2.jpeg'),
    ]),
  });
});

export default command;
