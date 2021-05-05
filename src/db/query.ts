import {Client} from 'pg';
import {User, Chat, DataManager} from '../types';

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

  const createTables = async () => {
    await pushQuery(`CREATE TABLE chats (id INT NOT NULL)`);
    await pushQuery(
      `CREATE TABLE users (id INT NOT NULL, chatid INT NOT NULL, date timestamp NOT NULL)`,
    );
    await pushQuery(
      `CREATE TABLE selected_users (id INT NOT NULL, chatid INT NOT NULL, date timestamp NOT NULL)`,
    );
  };

  const getChatUsers = async (chatId: number): Promise<User[]> => {
    return await pushQuery(`SELECT * FROM users WHERE chatid = ${chatId};`);
  };

  const addChat = async (chatId: number) => {
    await pushQuery(`INSERT INTO chats VALUES (${chatId});`);
  };

  const removeChat = async (chatId: number) => {
    await pushQuery(`DELETE FROM chats WHERE id = ${chatId};`);
  };

  const getChats = async (): Promise<Chat[]> => {
    return await pushQuery(`SELECT * FROM chats;`);
  };

  const getChatSelectedUsers = async (chatId: number): Promise<User[]> => {
    return await pushQuery(`SELECT * FROM selected_users WHERE chatid = ${chatId};`);
  };

  return {
    createTables,
    getChatUsers,
    addChat,
    removeChat,
    getChats,
    getChatSelectedUsers,
  };
};
