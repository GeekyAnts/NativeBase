/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, Platform, Animated, ViewPropTypes } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import { PLATFORM } from '../theme/variables/commonColor';

import { Text } from './Text';
import { Button } from './Button';
import { Toast } from './Toast';

const POSITION = {
  ABSOLUTE: 'absolute',
  BOTTOM: 'bottom',
  TOP: 'top'
};

class ToastContainer extends Component {
  static toastInstance;
  static show({ ...config }) {
    this.toastInstance._root.showToast({ config });
  }
  static hide() {
    if (this.toastInstance._root.getModalState()) {
      this.toastInstance._root.closeToast('functionCall');
    }
  }
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
      keyboardHeight: 0,
      isKeyboardVisible: false,
      modalVisible: false
    };

    this.keyboardDidHide = this.keyboardDidHide.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  getToastStyle() {
    return {
      position: POSITION.ABSOLUTE,
      opacity: this.state.fadeAnim,
      width: '100%',
      elevation: 9,
      paddingHorizontal: Platform.OS === PLATFORM.IOS ? 20 : 0,
      top: this.state.position === POSITION.TOP ? this.getTop() : undefined,
      bottom:
        this.state.position === POSITION.BOTTOM ? this.getTop() : undefined
    };
  }

  getTop() {
    if (Platform.OS === PLATFORM.IOS) {
      if (this.state.isKeyboardVisible) {
        return this.state.keyboardHeight;
      }
      return 30;
    }
    return 0;
  }

  getButtonText(buttonText) {
    if (buttonText) {
      if (buttonText.trim().length === 0) {
        return undefined;
      }
      return buttonText;
    }
    return undefined;
  }
  getModalState() {
    return this.state.modalVisible;
  }

  keyboardDidHide() {
    this.setState({
      keyboardHeight: 0,
      isKeyboardVisible: false
    });
  }

  keyboardDidShow(e) {
    this.setState({
      keyboardHeight: e.endCoordinates.height,
      isKeyboardVisible: true
    });
  }

  showToast({ config }) {
    this.setState({
      modalVisible: true,
      text: config.text,
      buttonText: this.getButtonText(config.buttonText),
      type: config.type,
      position: config.position ? config.position : POSITION.BOTTOM,
      supportedOrientations: config.supportedOrientations,
      style: config.style,
      buttonTextStyle: config.buttonTextStyle,
      buttonStyle: config.buttonStyle,
      textStyle: config.textStyle,
      onClose: config.onClose
    });
    // If we have a toast already open, cut off its close timeout so that it won't affect *this* toast.
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    // Set the toast to close after the duration.
    if (config.duration !== 0) {
      const duration = config.duration > 0 ? config.duration : 1500;
      this.closeTimeout = setTimeout(
        this.closeToast.bind(this, 'timeout'),
        duration
      );
    }
    // Fade the toast in now.
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 200
    }).start();
  }
  closeModal(reason) {
    this.setState({
      modalVisible: false
    });
    const { onClose } = this.state;
    if (onClose && typeof onClose === 'function') {
      onClose(reason);
    }
  }
  closeToast(reason) {
    clearTimeout(this.closeTimeout);
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 200
    }).start(this.closeModal.bind(this, reason));
  }

  render() {
    if (this.state.modalVisible) {
      return (
        <Animated.View style={this.getToastStyle()}>
          <Toast
            style={this.state.style}
            danger={this.state.type === 'danger'}
            success={this.state.type === 'success'}
            warning={this.state.type === 'warning'}
          >
            <Text style={this.state.textStyle}>{this.state.text}</Text>
            {this.state.buttonText && (
              <Button
                style={this.state.buttonStyle}
                onPress={() => this.closeToast('user')}
              >
                <Text style={this.state.buttonTextStyle}>
                  {this.state.buttonText}
                </Text>
              </Button>
            )}
          </Toast>
        </Animated.View>
      );
    }
    return null;
  }
}

ToastContainer.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledToastContainer = connectStyle(
  'NativeBase.ToastContainer',
  {},
  mapPropsToStyleNames
)(ToastContainer);

export { StyledToastContainer as ToastContainer };
