import { Platform } from 'react-native';

const baseStyle = {
  multiline: true,
  p: '2',
  totalLines: 4,
  h: Platform.select({ ios: 20 }),
  textAlignVertical: 'top',
};

export default { baseStyle };
