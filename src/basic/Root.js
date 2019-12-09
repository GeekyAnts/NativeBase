import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

import { ToastContainer as Toast } from './ToastContainer';
import { ActionSheetContainer as ActionSheet } from './Actionsheet';

class Root extends Component {
  render() {
    const { style, children, ...viewProps } = this.props;
    return (
      <View ref={c => (this._root = c)} {...viewProps} style={[ { flex: 1 }, style ]}>
        {children}
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

Root.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledRoot = connectStyle('NativeBase.Root', {}, mapPropsToStyleNames)(
  Root
);

export { StyledRoot as Root };
