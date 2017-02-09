import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const pickerTheme = {
  		'.note': {
  			color: '#aaa',
  		},
  		width: variable.deviceWidth / 3.5,
  };


  return pickerTheme;
};
