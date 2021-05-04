import {User, Client, DataManager} from '../types';

export const createDataManager = (db: Client): DataManager => {
  const pushQuery = async <T>(query: string): Promise<T[]> => {
    return new Promise((resolve, reject) => {
      db.query(query, (error, result) => {
        if (error) {
          reject(error);
        }

        resolve(result.rows);
        db.end();
      });
    });
  };

  const getChatUsers = async (chatId: number): Promise<User[]> => {
    return await pushQuery(`SELECT * FROM chats WHERE chatid = '${chatId}'`);
  };

  const addChat = async (chatId: number) => {
    await pushQuery(`INSERT INTO chats VALUES ('${chatId}');`);
  };

  return {
    getChatUsers,
    addChat,
  };
};
