export {Context, Telegraf} from 'telegraf';
export {Client} from 'pg';

export interface DataManager {
  getRows: <T>(query: string) => Promise<T[]>;
}
