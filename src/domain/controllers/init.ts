import {createCommand} from '../../utils';

const command = createCommand('init', (dm) => async () => {
  await dm.createTables;
});

export default command;
