import { Platform, Dimensions } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

const deviceHeight = Dimensions.get('window').height;
export default (variables = variable) => {
  const theme = {
    flex: 1,
    height: (Platform.OS === 'ios') ? deviceHeight : deviceHeight - 20
  };

  return theme;
};
