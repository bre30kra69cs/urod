export {Context, Telegraf} from 'telegraf';
export {Client} from 'pg';

export interface Chat {
  chatid: number;
}

export interface User {
  chatid: number;
  date: string;
  username: string;
  selected: boolean;
}

export interface DataManager {
  getChatUsers: (chatId: number) => Promise<User[]>;
  addChat: (chatId: number) => Promise<void>;
}
