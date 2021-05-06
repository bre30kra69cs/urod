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
}

export interface Meme {
  ID: number;
  bottomText: string;
  image: string;
  name: string;
  tags: string;
  topText: string;
}

export interface GetMememsResponse {
  code: number;
  data: Meme[];
  message: string;
  next: string;
}

export interface Api {
  getMemes: (page: number) => Promise<GetMememsResponse>;
}
