import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const pickerTheme = {
  		'.note': {
  			color: '#aaa',
  		},
  		width: variable.deviceWidth / 3.5,
  };


  return pickerTheme;
};
