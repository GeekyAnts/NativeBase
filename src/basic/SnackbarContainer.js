/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
  Keyboard,
  Platform,
  Animated,
  ViewPropTypes,
  PanResponder,
} from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import { PLATFORM } from '../theme/variables/commonColor';

import { Text } from './Text';
import { Button } from './Button';
import { Toast } from './Toast';

const POSITION = {
  ABSOLUTE: 'absolute',
  BOTTOM: 'bottom',
  TOP: 'top',
};

class SnackbarContainer extends Component {
  static show({ ...config }) {
    this.snackbarInstance._root.showSnackbar({ config });
  }
  static hide() {
    if (this.snackbarInstance._root.getModalState()) {
      this.snackbarInstance._root.closeSnackbar('functionCall');
    }
  }
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
      pan: new Animated.ValueXY({ x: 0, y: 0 }),
      keyboardHeight: 0,
      isKeyboardVisible: false,
      modalVisible: false,
    };

    this.keyboardDidHide = this.keyboardDidHide.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderRelease: (evt, { dx }) => {
        if (dx !== 0) {
          Animated.timing(this.state.pan, {
            toValue: { x: dx, y: 0 },
            duration: 100,
            useNativeDriver: false
          }).start(() => this.closeSnackbar('swipe'));
        }
      },
    });
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.removeListener('keyboardDidHide', this.keyboardDidHide);
  }

  getSnackbarStyle() {
    return {
      position: POSITION.ABSOLUTE,
      opacity: this.state.fadeAnim,
      width: '100%',
      elevation: 9,
      padding: 20,
      top: this.state.position === POSITION.TOP ? 30 : undefined,
      bottom:
        this.state.position === POSITION.BOTTOM ? this.getTop() : undefined,
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

  static snackbarInstance;

  keyboardDidHide() {
    this.setState({
      keyboardHeight: 0,
      isKeyboardVisible: false,
    });
  }

  keyboardDidShow(e) {
    this.setState({
      keyboardHeight: e.endCoordinates.height,
      isKeyboardVisible: true,
    });
  }

  showSnackbar({ config }) {
    this.setState({
      modalVisible: true,
      text: config.text,
      buttonText: this.getButtonText(config.buttonText),
      type: config.type,
      position: config.position ? config.position : POSITION.BOTTOM,
      supportedOrientations: config.supportedOrientations,
      style: config.style,
      buttonTextStyle: config.buttonTextStyle || {
        fontWeight: 'bold', 
        color: '#BF88FC'
      },
      buttonStyle: config.buttonStyle,
      textStyle: config.textStyle || {
        paddingLeft: 10
      },
      onClose: config.onClose,
      swipeDisabled: config.swipeDisabled || false
    });
    // If we have a snackbar already open, cut off its close timeout so that it won't affect *this* snackbar.
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    // Set the snackbar to close after the duration.
    if (config.duration !== 0) {
      const duration = config.duration > 0 ? config.duration : 2000;
      this.closeTimeout = setTimeout(
        this.closeSnackbar.bind(this, 'timeout'),
        duration
      );
    }
    // Fade the snackbar in now.
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }
  closeModal = (reason) => {
    this.setState({
      modalVisible: false,
    });
    const { onClose } = this.state;
    if (onClose && typeof onClose === 'function') {
      onClose(reason);
    }
  };
  closeSnackbar(reason) {
    clearTimeout(this.closeTimeout);
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      this.closeModal(reason);
      this.state.pan.setValue({ x: 0, y: 0 });
    });
  }

  render() {
    if (this.state.modalVisible) {
      const { x, y } = this.state.pan;
      return (
        <Animated.View
          {...this.state.swipeDisabled ? {} : this._panResponder.panHandlers}
          style={[
            this.getSnackbarStyle(),
            { transform: [{ translateX: x }, { translateY: y }] },
          ]}
        >
          <Toast
            style={[this.state.style, {
              borderRadius: 5
            }]}
            danger={this.state.type === 'danger'}
            success={this.state.type === 'success'}
            warning={this.state.type === 'warning'}
          >
            <Text style={this.state.textStyle}>{this.state.text}</Text>
            {this.state.buttonText && (
              <Button
                style={this.state.buttonStyle}
                onPress={() => this.closeSnackbar('user')}
              >
                <Text style={this.state.buttonTextStyle}>
                  {this.state.buttonText.toUpperCase()}
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

SnackbarContainer.propTypes = {
  ...ViewPropTypes,
};

const StyledSnackbarContainer = connectStyle(
  'NativeBase.ToastContainer',
  {},
  mapPropsToStyleNames
)(SnackbarContainer);

export { StyledSnackbarContainer as SnackbarContainer };