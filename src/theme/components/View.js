import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const viewTheme = {
      '.padder': {
        padding: variables.contentPadding,
      },
  };


  return viewTheme;
};
