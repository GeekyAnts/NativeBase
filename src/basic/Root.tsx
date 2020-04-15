import React, { Component } from 'react';
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import { ToastContainer as Toast } from './ToastContainer';
import { ActionSheetContainer as ActionSheet } from './Actionsheet';
type RootProps = {
  style?: StyleProp<ViewStyle>;
};

class Root extends Component<RootProps, {}> {
  render() {
    return (
      <View {...this.props} style={styles.container}>
        {this.props.children}
        <Toast
          ref={c => {
            if (c) Toast.toastInstance = c;
          }}
        />
        <ActionSheet
          ref={c => {
            if (c) ActionSheet.actionsheetInstance = c;
          }}
        />
      </View>
    );
  }
}
const StyledRoot = connectStyle('NativeBase.Root', {}, mapPropsToStyleNames)(Root);

export { StyledRoot as Root };

const styles = StyleSheet.create({
  container: { flex: 1 },
});
