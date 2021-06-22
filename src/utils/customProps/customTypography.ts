import { Config, system } from 'styled-system';

const config: Config = {
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecoration: true,
  txtDecor: { property: 'textDecoration' },
  textDecorationColor: {
    property: 'textDecorationColor',
    scale: 'colors',
  },
  textDecorationStyle: true,
  textDecorationLine: { property: 'textDecorationLine' },
};

export const customTypography = system(config);
