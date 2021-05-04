import {createCommand} from '../../utils';

const command = createCommand('register', (dataManager) => async () => {
  await dataManager.getRows('CREATE TABLE chats(chatid integer NOT NULL)');
});

export default command;
