import {getTime, formateTime, createTimeChatMessage} from '../../utils';

const chatMessage = createTimeChatMessage(() => {
  const timeNow = getTime();
  return formateTime(timeNow);
});

export default chatMessage;
