import {createCommand} from '../../utils';

const message = () => {
  return 'Ну даров, батёк 😎😎😅🔗 Я бот *УРОД*, и мне ПОЕБАТЬ 🤪🥵😱😭👹👿 Запомнил? Ну так если запомнил, то не удивляйся что команды мне говорить лень. Скажу лишь, что рано или поздно, но ты станешь *ПОПУЩЕННЫМ ДНЯ* 👩‍✈️👩‍🚀👩‍🏭👨‍🌾👩‍🍳👯‍♂️';
};

const command = createCommand('info', () => (ctx) => {
  ctx.replyWithMarkdown(message());
});

export default command;
