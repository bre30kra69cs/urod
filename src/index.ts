import {main} from './domain';
import {connectDb} from './db';

const process = async () => {
  const db = await connectDb();
  main(db);
};

process();
