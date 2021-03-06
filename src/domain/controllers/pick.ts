import {getName, getRandomFrom, createSchedule} from '../../utils';

const message = (target: string) => {
  return `Итак дамы и господа! 👮‍♂️👩‍🌾👩‍🎤👨‍🔬🧟‍♂️👩‍❤️‍💋‍👩🌈🌈 Настало время выбирать *ПОПУЩЕННОГО ДНЯ*. Мы все так долго этого ждали, так что не будем ТАЩИТЬ КОТА ЗА ЯЙЦА ЛАБА ЛАБА ДАБ ПАБ!.\n\n💫⚡️☄️🌎🌗🕣🕠🕞🕑🕔🔉 Я выбираю, я выбираю...\n\n*${target}*\n\nПоздравьте же этого господина! Теперь *${target}* официально (а не только за глаза) стал *ПОПУЩЕННЫМ ДНЯ*! 🏳️‍🌈🏳️‍🌈🏳️‍🌈✔️✅✅🕉💚🧡🏳️‍🌈🏳️‍🌈🇸🇮🇲🇳`;
};

const shedule = createSchedule('pick', ['30 11 * * *'], async ({dm, bot, log}) => {
  const data = await dm.bulkChats();

  data.forEach(async (item) => {
    const selected = getRandomFrom(item.users);

    log({
      selected,
    });

    if (selected) {
      const user = await bot.telegram.getChatMember(item.chatid, selected.id);
      const name = getName(user.user.first_name, user.user.last_name, user.user.username);

      log({
        user,
        name,
      });

      await dm.addSelectedUser(selected.id, item.chatid);
      await bot.telegram.sendMessage(item.chatid, message(name), {
        parse_mode: 'Markdown',
      });
    }
  });
});

export default shedule;
