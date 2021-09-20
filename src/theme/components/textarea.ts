import { Platform } from 'react-native';

const baseStyle = {
  multiline: true,
  px: 4,
  py: 2,
  totalLines: 4,
  h: Platform.select({ ios: 20 }),
};

export default { baseStyle };
