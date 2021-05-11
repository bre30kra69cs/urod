import {createCommand, head, last} from '../../utils';

const command = createCommand('meme', async ({api, ctx, log}) => {
  const data = await api.getMemes(1);
  const meme = head(data.memes);
  const image = last(meme.preview);

  log({
    memes: data,
    meme,
    image,
  });

  await ctx.replyWithPhoto(image);
});

export default command;
