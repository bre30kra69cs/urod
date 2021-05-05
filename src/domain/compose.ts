import {Client} from 'pg';
import {Telegraf} from 'telegraf';

import daily from './controllers/daily';
import info from './controllers/info';
import on from './controllers/on';
import off from './controllers/off';
import init from './controllers/init';
import {createDataManager} from '../db';

const commands = [daily, info, on, off, init];

export const compose = (bot: Telegraf, db: Client) => {
  const dm = createDataManager(db);
  commands.forEach((command) => command(bot, dm));
};
