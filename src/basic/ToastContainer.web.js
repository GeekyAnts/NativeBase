/* @flow */


import React, { Component } from 'react';
import { View, /*Modal,*/ Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { Text } from './Text';
import { Button } from './Button';
import { ViewNB } from './View';
import { Toast } from './Toast';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';


class ToastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }
  static toastInstance;
  static show({...config}) {
    this.toastInstance._root.showToast({config});
  }
  showToast({config}) {
    this.setState({
      modalVisible: true,
      text: config.text,
      buttonText: config.buttonText,
      type: config.type,
      position: config.position
    });
    if (config.duration>0) {
      setTimeout(()=> {
        this.setState({
          modalVisible: false
        });
      }, config.duration);
    }
  }
  componentDidMount() {
    if (!this.props.autoHide && this.props.duration) {
      console.warn(`It's not recommended to set autoHide false with duration`);
    }
  }
  render() {
    return null;
  }
}

ToastContainer.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledToastContainer = connectStyle('NativeBase.ToastContainer', {}, mapPropsToStyleNames)(ToastContainer);

export {
  StyledToastContainer as ToastContainer,
};
