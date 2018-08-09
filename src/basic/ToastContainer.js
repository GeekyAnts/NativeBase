import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Modal, Platform, Animated, ViewPropTypes } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import { Text } from "./Text";
import { Button } from "./Button";
import { ViewNB } from "./View";
import { Toast } from "./Toast";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class ToastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      fadeAnim: new Animated.Value(0)
    };
  }
  static toastInstance;
  static show({ ...config }) {
    this.toastInstance._root.showToast({ config });
  }
  static hide() {
    if (this.toastInstance._root.getModalState()) {
      this.toastInstance._root.closeToast("functionCall");
    }
  }
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
    if (Platform.OS === "ios") {
      return 30;
    } else {
      return 0;
    }
  }
  getButtonText(buttonText) {
    if (buttonText) {
      if (buttonText.trim().length === 0) {
        return undefined;
      } else return buttonText;
    }
    return undefined;
  }
  getModalState() {
    return this.state.modalVisible;
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
      onClose: config.onClose
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
    this.setState({
      modalVisible: false
    });
    const { onClose } = this.state;
    if (onClose && typeof onClose === "function") {
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
            danger={this.state.type == "danger" ? true : false}
            success={this.state.type == "success" ? true : false}
            warning={this.state.type == "warning" ? true : false}
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
    } else return null;
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
  "NativeBase.ToastContainer",
  {},
  mapPropsToStyleNames
)(ToastContainer);

export { StyledToastContainer as ToastContainer };
