import {createTimer} from '../utils';
import {Telegraf} from '../types';
import {config} from '../config';
import daily from './controllers/daily';
import info from './controllers/info';
import pick from './controllers/pick';
import watcher from './controllers/watcher';

export const compose = (bot: Telegraf) => {
  const timer = createTimer(config.getInterval());
  [pick, watcher].forEach((chatMessage) => timer.push(chatMessage(bot)));
  [daily, info].forEach((command) => command(bot));
};
