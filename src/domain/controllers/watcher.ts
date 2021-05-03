import {createTimeChatMessage} from '../../utils';

const chatMessage = createTimeChatMessage(() => {
  return 'is time';
});

export default chatMessage;
