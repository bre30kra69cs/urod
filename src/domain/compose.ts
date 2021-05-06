import {Client} from 'pg';
import {Telegraf} from 'telegraf';

import daily from './controllers/daily';
import info from './controllers/info';
import on from './controllers/on';
import off from './controllers/off';
import init from './controllers/init';
import join from './controllers/join';
import leave from './controllers/leave';
import {createDataManager} from '../db';
import {api} from '../api';

const commands = [daily, info, on, off, init, join, leave];

export const compose = (bot: Telegraf, db: Client) => {
  const dm = createDataManager(db);
  commands.forEach((command) => command(bot, dm, api));
};
