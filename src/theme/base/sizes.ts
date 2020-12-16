export const baseSizes = {
  '0': '0',
  '1': '4px',
  '2': '8px',
  '3': '12px',
  '4': '16px',
  '5': '20px',
  '6': '24px',
  '8': '32px',
  '10': '40px',
  '12': '48px',
  '16': '64px',
  '20': '80px',
  '24': '96px',
  '32': '128px',
  '40': '160px',
  '48': '192px',
  '56': '224px',
  '64': '256px',
};

const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

const sizes = {
  ...baseSizes,
  container,
};

export type BaseSizes = typeof baseSizes;
export type Sizes = typeof baseSizes & { container: typeof container };

export default sizes;
