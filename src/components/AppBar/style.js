import { StyleSheet } from 'react-native';

import { lightBlue600, APP_BAR_HEIGHT } from '../../styles';

const styles = StyleSheet.create({
  appBar: {
    height: APP_BAR_HEIGHT,
    backgroundColor: lightBlue600,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
