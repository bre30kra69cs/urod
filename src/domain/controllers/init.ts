import {createCommand} from '../../utils';

const tableMessageSuccess = () => {
  return 'TABLE CREATED ✅✅✅';
};

const tableMessageError = () => {
  return `TABLE CREATING ERROR - ❌❌❌`;
};

const message = () => {
  return 'INIT DONE 😎😎😎';
};

const command = createCommand('init', async ({dm, ctx}) => {
  try {
    await dm.createTables();
    await ctx.reply(tableMessageSuccess());
  } catch {
    await ctx.reply(tableMessageError());
  }

  await ctx.reply(message());
});

export default command;
