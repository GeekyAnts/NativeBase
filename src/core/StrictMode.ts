export type IModeType = 'off' | 'warn' | 'error';

const tokenNotString = 'tokenNotString';
const tokenNotFound = 'tokenNotFound';

export const strictModeLogger = ({
  token,
  scale,
  mode,
  type,
}: {
  token: string;
  scale: string;
  mode: IModeType;
  type: typeof tokenNotString | typeof tokenNotFound;
}) => {
  if (!mode) {
    mode = 'off';
  }

  if (mode === 'off') return;

  // eslint-disable-next-line no-console
  const log = console[mode];

  switch (type) {
    case tokenNotFound:
      log(
        `Token ${token} not found in theme scale of ${scale}. Please use extendTheme function to add this token in your theme`
      );
      return;
    case tokenNotString:
      log(`Token ${token} should be passed as a string.`);
      return;
    default:
      return;
  }
};
