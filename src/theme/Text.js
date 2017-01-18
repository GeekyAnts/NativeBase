import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const theme = {
    variables,
    'NativeBase.Text': {
      marginTop: 50,
      backgroundColor: '#797979',
    },

  };


  return theme;
};
