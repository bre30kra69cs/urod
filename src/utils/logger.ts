type Source = (...args: unknown[]) => void;

const createLogger = (level: 'error' | 'info', sources: Source[]) => (...args: unknown[]) => {
  sources.forEach((source) =>
    source({
      level,
      args,
    }),
  );
};

export const info = createLogger('info', [console.log]);

export const error = createLogger('error', [console.error]);
