import {createCommand, getRandomMax, getRandomFrom} from '../../utils';

const command = createCommand('meme', async ({api, ctx}) => {
  const page = getRandomMax(30);
  console.log({page});
  const memes = await api.getMemes(page);
  console.log({memes});
  const image = getRandomFrom(memes.data);
  console.log({image});
  ctx.replyWithPhoto(image.image);
});

export default command;
