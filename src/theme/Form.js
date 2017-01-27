import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const theme = {
    'NativeBase.Item':{
		marginLeft: 15,
		'.last':{
			marginLeft: 0,
			paddingLeft: 15,
		},
	},
  };

  return theme;
};
