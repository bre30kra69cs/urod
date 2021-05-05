import {createCommand} from '../../utils';

const command = createCommand('unregister', (dm) => async () => {
  await dm.createTables;
});

export default command;
