const createConfig = () => {
  const getToken = () => {
    return process.env.TOKEN ?? '';
  };

  const getPort = () => {
    return process.env.PORT ?? '5000';
  };

  return {
    getToken,
    getPort,
  };
};

export const config = createConfig();
