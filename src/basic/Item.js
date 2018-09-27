import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TouchableOpacity,
  Animated,
  Platform,
  View,
  StyleSheet
} from "react-native";
import { Input } from "./Input";
import { Label } from "./Label";
import { Icon } from "./Icon";

import { connectStyle } from "native-base-shoutem-theme";
import variables from "../theme/variables/platform";
import computeProps from "../utils/computeProps";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";
import _ from "lodash";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      topAnim: new Animated.Value(18),
      opacAnim: new Animated.Value(1),
      isFocused: false,
    };
  }

  componentDidMount() {
    if (this.props.floatingLabel) {
      if (this.inputProps && this.inputProps.value) {
        this.setState({ isFocused: true });
        this.floatUp(-16);
      }
      if (this.inputProps && this.inputProps.getRef) {
        this.inputProps.getRef(this._inputRef);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const childrenArray = React.Children.toArray(nextProps.children);
    _.remove(childrenArray, (item) => {
      if (item.type.displayName === 'Styled(Input)') {
        this.inputProps = item.props;
        return item;
      }
      return false;
    });
    if (this.props.floatingLabel) {
      if (this.inputProps && this.inputProps.value) {
        this.setState({ isFocused: true });
        this.floatUp(-16);
      }
      if (this.inputProps && this.inputProps.getRef) {
        this.inputProps.getRef(this._inputRef);
      }
    }
  }

  floatBack() {
    Animated.timing(this.state.topAnim, {
      toValue: 18,
      duration: 150,
    }).start();
    Animated.timing(this.state.opacAnim, {
      toValue: 1,
      duration: 150,
    }).start();
  }

  floatUp(e) {
    Animated.timing(this.state.topAnim, {
      toValue: e || -22,
      duration: 150,
    }).start();
    Animated.timing(this.state.opacAnim, {
      toValue: 0.7,
      duration: 150,
    }).start();
  }

  renderLabel(label, labelProps) {
    if (!label) {
      return React.createElement(Label, { ...labelProps });
    }

    if (this.props.floatingLabel) {
      if (this.state.isFocused) {
        const labelStyle = StyleSheet.flatten(
          { fontSize: 15, lineHeight: 30 },
          labelProps.style,
        );
        this.floatUp(-16);
        return React.cloneElement(label, {
          ...labelProps,
          key: 'newFLabel',
          float: true,
          style: labelStyle,
        });
      }
      this.floatBack();
      return label;
    }
    return React.cloneElement(label, {
      ...labelProps,
      key: 'newLabel',
    });
  }

  renderInput(inputElement, inputProps) {
    const props = {
      value: this.state.text,
      ...inputProps,
      ref: (c) => { this._inputRef = c; },
      key: 'l2',
      onFocus: () => {
        this.setState({ isFocused: true });
        inputProps.onFocus && inputProps.onFocus();
      },
      onBlur: () => {
        inputProps.value
          ? this.setState({
            isFocused: true,
          })
          : !this.state.text.length && this.setState({ isFocused: false });
        inputProps.onBlur && inputProps.onBlur();
      },
      onChangeText: (text) => {
        this.setState({ text });
        inputProps.onChangeText && this.inputProps.onChangeText(text);
      },
    };

    if (!inputElement) {
      return React.createElement(Input, props);
    }
    return React.cloneElement(inputElement, props);
  }

  renderChildren() {
    let labelChild = null;
    let labelProps = {};
    let inputChild = null;
    let inputProps = {};
    const icon = [];
    let iconProps = {};
    let newChildren = [];

    React.Children.toArray(this.props.children)
      .forEach((item) => {
        if (item.type.displayName === 'Styled(Label)') {
          labelChild = item;
          labelProps = item.props;
        } else if (item.type.displayName === 'Styled(Input)') {
          inputChild = item;
          inputProps = item.props;
          this.inputProps = item.props;
        } else if (item.type.displayName === 'Styled(Icon)') {
          icon.push({ iconItem: item, isRight: !!inputChild });
          iconProps = item.props;
        }
      });

    if (this.props.floatingLabel) {
      const hasIcon = icon && icon.length;
      const hasIconLeft = icon && icon.length && icon.some(iconElement => !iconElement.isRight);
      newChildren.push(
        <Animated.View
          key="float"
          style={{
            position: 'absolute',
            left:
              this.props.last && hasIconLeft
                ? 40
                : this.props.last
                  ? 15
                  : hasIconLeft
                    ? 26
                    : 0,
            right: 0,
            top: this.state.topAnim,
            opacity: this.state.opacAnim,
            paddingTop: Platform.OS === 'ios' ? undefined : 2,
            paddingBottom: Platform.OS === 'ios' ? undefined : 12,
          }}
        >
          {this.renderLabel(labelChild, labelProps)}
        </Animated.View>,
      );
      newChildren.push(this.renderInput(inputChild, inputProps));
      if (hasIcon) {
        icon.forEach(({ iconItem, isRight }) => {
          const iconComponent = <Icon key={iconItem.key} {...iconItem.props} />;
          if (isRight) {
            newChildren.push(iconComponent);
          } else {
            newChildren.unshift(iconComponent);
          }
        });
      }
    } else if (this.props.stackedLabel && icon.length) {
      newChildren.push(
        <View
          key="s"
          style={{
            flexDirection: 'row',
            flex: 1,
            width: variables.deviceWidth - 15,
          }}
        >
          <Icon key="s1" {...iconProps} />
          <View style={{ flexDirection: 'column' }}>
            <Label key="s2" {...labelProps} />
            {React.cloneElement(inputChild, {
              ...inputProps,
              key: 's3',
              style: { width: variables.deviceWidth - 40 },
            })}
          </View>
        </View>,
      );
    } else {
      newChildren = this.props.children;
    }
    return newChildren;
  }

  getInitialStyle() {
    return {
      roundedInputGroup: {
        borderWidth: this.props.rounded ? variables.borderWidth * 2 : undefined,
        borderRadius: this.props.rounded
          ? variables.inputGroupRoundedBorderRadius
          : undefined,
      },
    };
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().roundedInputGroup,
    };

    return computeProps(this.props, defaultProps);
  }

  render() {
    return (
      <TouchableOpacity
        ref={(c) => { this._root = c; }}
        {...this.prepareRootProps()}
        activeOpacity={1}
      >
        {this.renderChildren()}
      </TouchableOpacity>
    );
  }
}

const childrenType = function (props, propName, component) {
  let error;
  const prop = props[propName];
  if (!props.children.length) {
    error = new Error(
      `${component} should have both Label and Input components`
    );
  } else if (
    props.children[0].type.displayName !== "Styled(Label)" ||
    props.children[1].type.displayName !== "Styled(Input)"
  ) {
    error = new Error(
      `${component} should have Label and Input components only`
    );
  }
  return error;
};

Item.propTypes = {
  ...TouchableOpacity.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  inlineLabel: PropTypes.bool,
  floatingLabel: PropTypes.bool,
  stackedLabel: PropTypes.bool,
  fixedLabel: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool
};

const StyledItem = connectStyle("NativeBase.Item", {}, mapPropsToStyleNames)(
  Item
);

export { StyledItem as Item };