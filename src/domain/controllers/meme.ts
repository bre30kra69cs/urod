import {createCommand, head, last} from '../../utils';

const command = createCommand('meme', async ({api, ctx}) => {
  const data = await api.getMemes(1);
  const meme = head(data.memes);
  const image = last(meme.preview);
  await ctx.replyWithPhoto(image);
});

export default command;
