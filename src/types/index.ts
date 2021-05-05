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
