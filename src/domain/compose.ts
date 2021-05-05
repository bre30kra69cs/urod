import {Client} from 'pg';
import {Telegraf} from 'telegraf';

import daily from './controllers/daily';
import info from './controllers/info';
import register from './controllers/register';
import unregister from './controllers/unregister';
import {createDataManager} from '../db';

const commands = [daily, info, register, unregister];

export const compose = (bot: Telegraf, db: Client) => {
  const dataManager = createDataManager(db);
  commands.forEach((command) => command(bot, dataManager));
};
