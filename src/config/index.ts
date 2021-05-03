const createConfig = () => {
  const getToken = () => {
    return process.env.TOKEN!;
  };

  return {
    getToken,
  };
};

export const config = createConfig();
