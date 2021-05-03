const createConfig = () => {
  const getToken = () => {
    return process.env.TOKEN ?? '';
  };

  const getPort = () => {
    return parseInt(process.env.PORT ?? '5000');
  };

  const getHttpDomain = () => {
    return process.env.HTTP_DOMAIN ?? '';
  };

  const getInterval = () => {
    return 1000;
  };

  return {
    getToken,
    getPort,
    getHttpDomain,
    getInterval,
  };
};

export const config = createConfig();
