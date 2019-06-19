/**
|--------------------------------------------------
| @desc Implements the basic material design visual
| layout structure.
|--------------------------------------------------
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Styles from './style';

const Scaffold = ({ children, appBar }) => {
  return (
    <View style={Styles.container}>
      {appBar}
      {children}
    </View>
  );
};

export default Scaffold;
