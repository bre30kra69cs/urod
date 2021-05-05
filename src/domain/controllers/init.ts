import {createCommand} from '../../utils';

const message = () => {
  return 'INIT OK 😎😎😎';
};

const command = createCommand('init', (dm) => async (ctx) => {
  await dm.createTables();
  await ctx.reply(message());
});

export default command;
