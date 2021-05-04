import {createCommand} from '../../utils';

const command = createCommand('register', (dataManager) => async (ctx) => {
  const rows = await dataManager.getRows(
    'SELECT table_schema,table_name FROM information_schema.tables;',
  );
  ctx.reply(JSON.stringify(rows, undefined, 2));
});

export default command;
