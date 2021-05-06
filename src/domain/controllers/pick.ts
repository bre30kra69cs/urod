import {createSchedule} from '../../utils';

const shedule = createSchedule('pick', '1-40 * * * *', async ({dm, bot}) => {
  const chats = await dm.getChats();
  chats.forEach(({id}) => bot.telegram.sendMessage(id, 'hello'));
});

export default shedule;
