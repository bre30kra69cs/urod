import {createCommand} from '../../utils';

const message = () => {
  return `Ну даров, батёк 😎😎😅🔗 Я бот УРОД и мне ПОЕБАТЬ 🤪🥵😱😭👹👿 Запомнил? Ну так если запомнил, то не удивляйся что команды мне говорить лень. Скажу лишь, что рано или поздно, но ты станешь "попущеным дня" 👩‍✈️👩‍🚀👩‍🏭👨‍🌾👩‍🍳👯‍♂️`;
};

const command = createCommand('info', (ctx) => {
  ctx.reply(message());
});

export default command;
