/**
|--------------------------------------------------
| @desc A material design app bar.
|--------------------------------------------------
*/

import React from 'react';
import { Text, View } from 'react-native';

import Styles from './style';

const AppBar = ({ title }) => {
  return (
    <View style={Styles.appBar}>
      <Text>{title}</Text>
    </View>
  );
};

export default AppBar;
