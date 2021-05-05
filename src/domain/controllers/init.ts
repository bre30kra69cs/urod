import {createCommand} from '../../utils';

const tableMessageSuccess = () => {
  return 'TABLES CREATED ✅✅✅';
};

const tableMessageError = () => {
  return `TABLES CREATE ERROR - ❌❌❌`;
};

const message = () => {
  return 'INIT DONE 😎😎😎';
};

const command = createCommand('init', (dm) => async (ctx) => {
  try {
    await dm.createTables();
    await ctx.reply(tableMessageSuccess());
  } catch {
    await ctx.reply(tableMessageError());
  }

  await ctx.reply(message());
});

export default command;
