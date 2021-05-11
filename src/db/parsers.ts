import {User, Chat} from '../types';
import {parser, parseNumber, parseString} from '../utils';

export const userParser = parser<User>({
  id: parseNumber,
  chatid: parseNumber,
  date: parseString,
});

export const chatParser = parser<Chat>({
  id: parseNumber,
});
