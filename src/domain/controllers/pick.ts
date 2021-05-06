import {createSchedule} from '../../utils';

const shedule = createSchedule('pick', ['1-59 * * * *', '30 11 * * *'], async ({dm}) => {
  const chats = await dm.bulkChats();
  console.log({chats});
});

export default shedule;
