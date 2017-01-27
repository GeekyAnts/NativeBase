import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const theme = {
    'NativeBase.Item':{
		'.fixedLabel': {
			'NativeBase.Label': {
				paddingLeft: null,
			},
			marginLeft: 15,
		},
		'.inlineLabel': {
			'NativeBase.Label': {
				paddingLeft: null,
			},
			marginLeft: 15,
		},
		'.placeholderLabel': {
			'NativeBase.Input': {
				marginLeft: -10,
				height: 40,
			},
		},
		'.stackedLabel': {
			'NativeBase.Label': {
				paddingLeft: null,
			},
			'NativeBase.Input': {
				paddingLeft: null,
			},
			marginLeft: 15,
		},
		'.floatingLabel': {
			'NativeBase.Input': {
				paddingLeft: null,
			},
			'NativeBase.Label': {
				left: 0,
			},
			marginLeft: 15,
		},
		'.last': {
			marginLeft:0,
			paddingLeft:15
		},
		marginLeft: 15,
	},
  };

  return theme;
};
