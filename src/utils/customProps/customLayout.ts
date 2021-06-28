import { Config, system, get } from 'styled-system';

const isNumber = (n: any) => typeof n === 'number' && !isNaN(n);
const getWidth = (n: any, scale: any) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');

const config: Config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth,
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
};

config.w = config.width;
config.minW = config.minWidth;
config.maxW = config.maxWidth;
config.h = config.height;
config.minH = config.minHeight;
config.maxH = config.maxHeight;
config.boxSize = config.size;
config.d = config.display;
config.boxSizing = true;

export const customLayout = system(config);
