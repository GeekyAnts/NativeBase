import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const contentTheme = {
      '.padder': {
        padding: variables.contentPadding,
      },
      flex: 1,
      backgroundColor: 'transparent',
      marginBottom: (Platform.OS === 'ios') ? -20 : 23,
  };

  return contentTheme;
};
