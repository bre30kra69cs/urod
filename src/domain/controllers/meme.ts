import {createCommand, head} from '../../utils';

const command = createCommand('meme', async ({api, ctx}) => {
  const data = await api.getMemes(1);
  console.log({data});
  const meme = head(data.memes);
  const image = head(meme.preview);
  console.log({image});
  ctx.replyWithPhoto(image);
});

export default command;
