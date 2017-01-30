import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const theme = {
  	'.bordered': {
  		borderBottomWidth: 1,
  		borderTopWidth: 1,
  		borderColor: variables.listBorderColor,
  	},
  	'NativeBase.Text': {
  		fontSize: variables.tabBarTextSize,
  	},
  	height: 38,
  	backgroundColor: '#f4f4f4',
  	flex: 1,
  	justifyContent: 'center',
  	paddingLeft: variables.listItemPadding + 5,
  };

  return theme;
};
