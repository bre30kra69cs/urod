import {DateTime} from 'luxon';
import {Client} from 'pg';
import {User, Chat, BulkChat, DataManager} from '../types';
import {all, last} from '../utils';
import {userParser, chatParser} from './parsers';

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
    await pushQuery(`CREATE TABLE chats (id BIGINT NOT NULL);`);
    await pushQuery(
      `CREATE TABLE users (id BIGINT NOT NULL, chatid BIGINT NOT NULL, date text NOT NULL);`,
    );
    await pushQuery(
      `CREATE TABLE selected_users (id BIGINT NOT NULL, chatid BIGINT NOT NULL, date text NOT NULL);`,
    );
  };

  const getChatUsers = async (chatId: number): Promise<User[]> => {
    const users = (await pushQuery(`SELECT * FROM users WHERE chatid = ${chatId};`)) ?? [];
    return users.map(userParser);
  };

  const addChat = async (chatId: number): Promise<void> => {
    await pushQuery(`INSERT INTO chats VALUES (${chatId});`);
  };

  const removeChat = async (chatId: number): Promise<void> => {
    await pushQuery(`DELETE FROM chats WHERE id = ${chatId};`);
  };

  const getChats = async (): Promise<Chat[]> => {
    const chats = (await pushQuery(`SELECT * FROM chats;`)) ?? [];
    return chats.map(chatParser);
  };

  const getChatSelectedUsers = async (chatId: number): Promise<User[]> => {
    const selectedUsers =
      (await pushQuery(`SELECT * FROM selected_users WHERE chatid = ${chatId};`)) ?? [];
    return selectedUsers.map(userParser);
  };

  const addUser = async (userId: number, chatId: number): Promise<void> => {
    await pushQuery(
      `INSERT INTO users VALUES (${userId}, ${chatId}, '${DateTime.now().toString()}');`,
    );
  };

  const removeUser = async (userId: number, chatId: number): Promise<void> => {
    await pushQuery(`DELETE FROM users WHERE id = ${userId} AND chatid = ${chatId};`);
  };

  const addSelectedUser = async (userId: number, chatId: number): Promise<void> => {
    await pushQuery(
      `INSERT INTO selected_users VALUES (${userId}, ${chatId}, '${DateTime.now().toString()}');`,
    );
  };

  const removeSelectedUser = async (userId: number, chatId: number): Promise<void> => {
    await pushQuery(`DELETE FROM selected_users WHERE id = ${userId} AND chatid = ${chatId};`);
  };

  const bulkChats = async (): Promise<BulkChat[]> => {
    const chats = await getChats();
    const users = await all(chats.map(({id}) => getChatUsers(id)));
    const selectedUsers = await all(chats.map(({id}) => getChatSelectedUsers(id)));
    return chats.map(({id}, index) => {
      return {
        chatid: id,
        users: users[index],
        selectedUsers: selectedUsers[index],
      };
    });
  };

  const getChatSelectedUser = async (chatId: number): Promise<User | undefined> => {
    const users = await getChatSelectedUsers(chatId);
    return last(users);
  };

  return {
    createTables,
    getChatUsers,
    addChat,
    removeChat,
    getChats,
    getChatSelectedUsers,
    addUser,
    removeUser,
    addSelectedUser,
    removeSelectedUser,
    bulkChats,
    getChatSelectedUser,
  };
};
