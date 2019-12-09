import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

import { ToastContainer as Toast } from './ToastContainer';
import { ActionSheetContainer as ActionSheet } from './Actionsheet';

class Root extends Component {

  static instances = [];

  static getActionSheetInstance = () => {
    let c = Root.instances[Root.instances.length - 1];
    if(c){
      return c.actionSheet;
    }
  }

  static getToastInstance = () => {
    let c = Root.instances[Root.instances.length - 1];
    if(c){
      return c.toast;
    }
  }

  actionSheetRef = (c) => {
    this.actionSheet = c;
  }

  toastRef = (c) => {
    this.toast = c;
  }

  componentDidMount(){
    Root.instances.push(this);
  }

  componentWillUnmount(){
    let idx = Root.instances.indexOf(this);
    if(idx !== -1){
      Root.instances.splice(idx, 1);
    }
  }

  render() {
    return (
      <View ref={c => (this._root = c)} {...this.props} style={{ flex: 1 }}>
        {this.props.children}
        <Toast
          ref={this.toastRef}
        />
        <ActionSheet
          ref={this.actionSheetRef}
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
