import {createCommand} from '../../utils';

const command = createCommand('register', (dataManager) => async () => {
  const rows = await dataManager.getRows(
    'SELECT table_schema,table_name FROM information_schema.tables;',
  );
  console.log(JSON.stringify(rows));
});

export default command;
