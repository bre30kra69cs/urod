import axios from 'axios';

import {Api, GetMememsResponse} from '../types';

const createApi = (): Api => {
  const getMemes = async (page: number) => {
    const response = await axios.get<GetMememsResponse>(
      `https://meme-api.herokuapp.com/gimme/${page}`,
    );
    return response.data;
  };

  return {
    getMemes,
  };
};

export const api = createApi();
