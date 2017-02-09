import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const viewTheme = {
    flex: 1,
      '.padder': {
        padding: variables.contentPadding,
      },
  };


  return viewTheme;
};
