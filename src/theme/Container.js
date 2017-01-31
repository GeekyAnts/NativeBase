import { Platform, Dimensions } from 'react-native';
import _ from 'lodash';

import variable from './variables';

const deviceHeight = Dimensions.get('window').height;
export default (variables = variable) => {
  const theme = {
    flex: 1,
    height: deviceHeight,
  };

  return theme;
};
