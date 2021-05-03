import {Telegraf} from '../types';
import daily from './controllers/daily';
import info from './controllers/info';

export const compose = (bot: Telegraf) => {
  [daily, info].forEach((command) => command(bot));
};
