import axios from 'axios';

import {Api, GetMememsResponse} from '../types';

const createApi = (): Api => {
  const getMemes = async (page: number) => {
    const response = await axios.get<GetMememsResponse>(
      `http://alpha-meme-maker.herokuapp.com/${page}`,
    );
    return response.data;
  };

  return {
    getMemes,
  };
};

export const api = createApi();
