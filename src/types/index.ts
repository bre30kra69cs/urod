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
  getChats: () => Promise<Chat[]>;
  setUser: (chatId: number, date: string, username: string, selected: boolean) => Promise<void>;
  getLastChatUser: (chatId: number) => Promise<User | undefined>;
  getLastSelectedChatUser: (chatId: number) => Promise<User | undefined>;
  getCurrentSelectedChatUser: (chatId: number) => Promise<User | undefined>;
}
