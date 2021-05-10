import { Config, system } from 'styled-system';

const config: Config = {
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecoration: true,
  txtDecor: { property: 'textDecoration' },
  textDecorationLine: { property: 'textDecorationLine' },
};

export const customTypography = system(config);
