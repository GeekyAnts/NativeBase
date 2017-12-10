import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Platform, ViewPropTypes } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import { Text } from "./Text";
import { Button } from "./Button";
import { Toast } from "./Toast";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class ToastContainer extends Component {
  static toastInstance;

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      fadeAnim: new Animated.Value(0)
    };
  }

  static show({ ...config }) {
    this.toastInstance._root.showToast({ config });
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
    if (config.duration > 0) {
      setTimeout(() => {
        Animated.timing(this.state.fadeAnim, {
          toValue: 0,
          duration: 200
        }).start();
        setTimeout(() => {
          this.setState({
            modalVisible: false
          });
        }, 500);
      }, config.duration);
    } else {
      setTimeout(() => {
        Animated.timing(this.state.fadeAnim, {
          toValue: 0,
          duration: 200
        }).start();
        setTimeout(() => {
          this.setState({
            modalVisible: false
          });
        }, 500);
      }, 1500);
    }
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 200
    }).start();
  }

  closeToast() {
    const { onClose } = this.state;

    if (onClose && typeof onClose === "function") {
      onClose();
    }
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 200
    }).start();
    setTimeout(() => {
      this.setState({
        modalVisible: false
      });
    }, 500);
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
                onPress={() => this.closeToast()}
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
