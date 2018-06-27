import React, { Component } from "react";
import { array, number, object, oneOfType } from "prop-types";
import { View, Modal, Platform, Animated, ViewPropTypes } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import { Text } from "./Text";
import { Button } from "./Button";
import { ViewNB } from "./View";
import { Toast } from "./Toast";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class ToastContainer extends Component {
  static propTypes = {
    ...ViewPropTypes,
    style: oneOfType([object, number, array])
  };

  static toastInstance;

  static show({ ...config }) {
    this.toastInstance._root.showToast({ config });
  }

  state = {
    modalVisible: false,
    fadeAnim: new Animated.Value(0)
  };

  getToastStyle() {
    return {
      position: "absolute",
      opacity: this.state.fadeAnim,
      width: "100%",
      elevation: 9,
      paddingHorizontal: Platform.OS === "ios" ? 20 : 0,
      top: this.state.position === "top" ? this.getTop() : undefined,
      bottom: this.state.position === "bottom" ? this.getTop() : undefined
    };
  }

  getTop() {
    return Platform.OS === "ios" ? 30 : 0;
  }

  getButtonText(buttonText) {
    if (buttonText) {
      if (buttonText.trim().length > 0) {
        return buttonText
      }
    }

    return undefined;
  }

  showToast({ config }) {
    this.setState({
      modalVisible: true,
      text: config.text,
      buttonText: this.getButtonText(config.buttonText),
      type: config.type,
      position: config.position ? config.position : "bottom",
      supportedOrientations: config.supportedOrientations,
      style: config.style,
      buttonTextStyle: config.buttonTextStyle,
      buttonStyle: config.buttonStyle,
      textStyle: config.textStyle,
      onClose: config.onClose,
      onButtonClick: config.onButtonClick
    });

    // If we have a toast already open, cut off its close timeout so that it won't affect *this* toast.
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout)
    }

    // Set the toast to close after the duration.
    if (config.duration !== 0) {
      const duration = (config.duration > 0) ? config.duration : 1500;
      this.closeTimeout = setTimeout(this.closeToast.bind(this, 'timeout'), duration);
    }

    // Fade the toast in now.
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 200
    }).start();
  }

  closeModal(reason) {
    this.setState({ modalVisible: false });
    const { onClose } = this.state;

    if(onClose && typeof onClose === "function") {
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

  // Call the onButtonClick event and close the modal
  onButtonClick(reason, func) {
    if (func && typeof func === "function") func();
    closeModal(reason)
  }
  render() {
    const {
      buttonStyle,
      buttonText,
      buttonTextStyle,
      modalVisible,
      onButtonClick,
      style,
      text,
      textStyle,
      type,
    } this.state;

    return modalVisible ? (
      <Animated.View style={this.getToastStyle()}>
        <Toast
          style={style}
          danger={type == "danger"}
          success={type == "success"}
          warning={type == "warning"}
        >
          <Text style={textStyle}>{text}</Text>
          {buttonText && (
            <Button
              style={buttonStyle}
              onPress={() => onButtonClick ?
                this.onButtonClick('user', onButtonClick) :
                this.closeToast('user')}
            >
              <Text style={buttonTextStyle}>
                {buttonText}
              </Text>
            </Button>
          )}
        </Toast>
      </Animated.View>
    ) : null;
  }
}

const StyledToastContainer = connectStyle(
  "NativeBase.ToastContainer",
  {},
  mapPropsToStyleNames
)(ToastContainer);

export { StyledToastContainer as ToastContainer };
