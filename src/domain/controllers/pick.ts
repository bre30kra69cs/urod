import {config} from '../../config';
import {isInIntervalTime, getTime, createTimeChatMessage} from '../../utils';

const chatMessage = createTimeChatMessage(() => {
  if (isInIntervalTime(config.getPickTimeInterval(), getTime())) {
    return 'is time';
  }
});

export default chatMessage;
