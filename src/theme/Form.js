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
				
			},
			marginLeft: 15,
		},
		'.last': {
			marginLeft:0,
			paddingLeft:15
		},
	},
  };

  return theme;
};
