import {createCommand} from '../../utils';

const command = createCommand('register', (dataManager) => async () => {
  await dataManager.getRows(
    'CREATE TABLE users(chatid integer NOT NULL, date text NOT NULL, username text NOT NULL, selected boolean NOT NULL)',
  );
});

export default command;
