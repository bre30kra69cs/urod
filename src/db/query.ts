import {Client, DataManager} from '../types';

export const createDataManager = (db: Client): DataManager => {
  const getRows = async <T>(query: string): Promise<T[]> => {
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

  return {
    getRows,
  };
};
