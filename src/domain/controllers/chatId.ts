import {createCommand} from '../../utils';

const command = createCommand('chat_id', (ctx) => {
  ctx.reply(String(ctx.chat?.id ?? -1));
});

export default command;
