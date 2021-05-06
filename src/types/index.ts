export interface Chat {
  id: number;
}

export interface User {
  id: number;
  chatid: number;
  date: string;
}

export interface DataManager {
  createTables: () => Promise<void>;
  getChatUsers: (chatId: number) => Promise<User[]>;
  addChat: (chatId: number) => Promise<void>;
  removeChat: (chatId: number) => Promise<void>;
  getChats: () => Promise<Chat[]>;
  getChatSelectedUsers: (chatId: number) => Promise<User[]>;
  addUser: (userId: number, chatId: number) => Promise<void>;
  removeUser: (userId: number, chatId: number) => Promise<void>;
  addSelectedUser: (userId: number, chatId: number) => Promise<void>;
  removeSelectedUser: (userId: number, chatId: number) => Promise<void>;
  bulkChats: () => Promise<BulkChat[]>;
}

export interface Meme {
  postLink: string;
  subreddit: string;
  title: string;
  url: string;
  nsfw: boolean;
  spoiler: boolean;
  author: string;
  ups: number;
  preview: string[];
}

export interface GetMememsResponse {
  count: number;
  memes: Meme[];
}

export interface Api {
  getMemes: (page: number) => Promise<GetMememsResponse>;
}

export interface BulkChat {
  chatid: number;
  users: User[];
  selectedUsers: User[];
}
