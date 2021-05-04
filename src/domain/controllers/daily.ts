import {bold, createCommand, getRandomFrom} from '../../utils';

const message = (author = '', target = '') => {
  if (!author && !target) {
    return 'Пока еще никто, дорогой Анончик...';
  }

  const boldTarget = bold(target);

  if (!author) {
    return `Конечно же это ${boldTarget}...`;
  }

  return getRandomFrom([
    `${author} 😍❤️❤️😍😍😎😎👍 тебе интересно кто сегодня был попущен ??? Глупышка, очевидно же, что это ${boldTarget}...`,
    `"Самое странное — почему в мире, где есть войны, голод, болезни, жестокость, изнасилования, кто-то беспокоится о том, что я делаею по вечерам с мужиками?" - Задался сегодня вопросом ${boldTarget} и был попущен...`,
    `"Для них ты просто псих, как я. Сейчас ты им нужен, а надоешь — они тебя выкинут, как прокажённого. Их принципы, их кодекс — всего лишь слова, забываемые при первой опасности. Они такие, какими мир позволяет им быть." - Написал мне ${boldTarget} сегодня в привтном чате перед тем как был попущен...`,
    `Конечно же это ${boldTarget}... Поздравьте его, что он хотя бы не криса или не гудок на зоне... 🤚🖐👈🤘🦵👄🤚✌️🐰🐹🐭🐢🐴`,
    `Сегодня это ${boldTarget}, про то как его попустили даже в библии написали ⭐️🌈💫🌏🔥🌛🌎☄️ - "Еще не легли они спать, как городские жители, содомляне, от молодого до старого, весь народ со всех концов города, окружили дом и вызвали Лота и говорили ему: где люди, пришедшие к тебе на ночь? выведи их к нам; и мы познаем их. Лот вышел к ним и запер за собою дверь, и сказал [им]: братья мои, не делайте зла; вот у меня две дочери, которые не познали мужа; лучше я выведу их к вам, делайте с ними, что вам угодно, только людям сим не делайте ничего, так как они пришли под кров дома моего. Но они сказали: вот пришелец, и хочет судить? Теперь мы хуже поступим с тобою, нежели с ними. И очень подступили к человеку сему, к Лоту, и подошли, чтобы выломать дверь."`,
  ]);
};

const command = createCommand('daily', () => (ctx) => {
  ctx.reply(message(ctx.from?.first_name, ctx.from?.first_name));
});

export default command;
