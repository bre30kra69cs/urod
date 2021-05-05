import {DateTime} from 'luxon';
import {User, Chat, Client, DataManager} from '../types';

export const createDataManager = (db: Client): DataManager => {
  const pushQuery = async <T>(query: string): Promise<T[]> => {
    return new Promise((resolve, reject) => {
      db.query(query, (error, result) => {
        if (error) {
          reject(error);
        }

        resolve(result?.rows ?? []);
      });
    });
  };

  const getChatUsers = async (chatId: number): Promise<User[]> => {
    return await pushQuery(`SELECT * FROM users WHERE chatid = '${chatId}'`);
  };

  const addChat = async (chatId: number) => {
    await pushQuery(`INSERT INTO chats VALUES ('${chatId}')`);
  };

  const getChats = async (): Promise<Chat[]> => {
    return await pushQuery(`SELECT * FROM chats`);
  };

  const setUser = async (chatId: number, date: string, username: string, selected: boolean) => {
    await pushQuery(
      `INSERT INTO users VALUES ('${chatId}', '${date}', '${username}', '${selected}')`,
    );
  };

  const getLastChatUser = async (chatId: number): Promise<User | undefined> => {
    const users = await getChatUsers(chatId);
    return users[users.length - 1];
  };

  const getLastSelectedChatUser = async (chatId: number): Promise<User | undefined> => {
    const users = await getChatUsers(chatId);
    const selectedUsers = users.filter((user) => user.selected);
    return selectedUsers[selectedUsers.length - 1];
  };

  const getCurrentSelectedChatUser = async (chatId: number): Promise<User | undefined> => {
    const user = await getLastSelectedChatUser(chatId);

    if (user) {
      const now = DateTime.now();
      const date = DateTime.fromISO(user.date);

      if (date.hasSame(now, 'year') && date.hasSame(now, 'month') && date.hasSame(now, 'day')) {
        if (now > date) {
          return user;
        }
      }
    }
  };

  return {
    getChatUsers,
    addChat,
    getChats,
    setUser,
    getLastChatUser,
    getLastSelectedChatUser,
    getCurrentSelectedChatUser,
  };
};
