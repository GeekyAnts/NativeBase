/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Animated,
  Platform,
  View,
  StyleSheet
} from 'react-native';
import { isArray, remove } from 'lodash';
import { connectStyle } from 'native-base-shoutem-theme';

import variables from '../theme/variables/platform';
import computeProps from '../utils/computeProps';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

import { Input } from './Input';
import { Label } from './Label';
import { Icon } from './Icon';
import { Thumbnail } from './Thumbnail';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      text: '',
      topAnim: new Animated.Value(18),
      opacAnim: new Animated.Value(1)
    };
  }
  componentDidMount() {
    if (this.props.floatingLabel) {
      if (this.inputProps && this.inputProps.value) {
        const effect = () => {
          this.setState({ isFocused: true });
        };
        this.floatUp(-16);
        effect();
      }
      if (this.inputProps && this.inputProps.getRef)
        this.inputProps.getRef(this._inputRef);
    }
  }

  // Temporary fix to avoid the crash.
  // To be refactored to getDerivedStateFromProps.

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    const childrenArray = React.Children.toArray(nextProps.children);

    remove(childrenArray, item => {
      if (item.type.displayName === 'Styled(Input)') {
        this.inputProps = item.props;
        return item;
      }
      return null;
    });
    if (this.props.floatingLabel) {
      if (this.inputProps && this.inputProps.value) {
        this.setState({ isFocused: true });
        this.floatUp(-16);
      }
      if (this.inputProps && this.inputProps.getRef)
        this.inputProps.getRef(this._inputRef);
    }
  }

  getInitialStyle() {
    return {
      roundedInputGroup: {
        borderWidth: this.props.rounded ? variables.borderWidth * 2 : undefined,
        borderRadius: this.props.rounded
          ? variables.inputGroupRoundedBorderRadius
          : undefined
      }
    };
  }

  getPlacholderValue(inputProps) {
    let placeholderValue;

    if (isArray(this.props.children) && this.props.children[0].props.children) {
      placeholderValue = null;
    } else {
      placeholderValue = inputProps.placeholder;
    }

    return placeholderValue;
  }

  floatBack(e) {
    Animated.timing(this.state.topAnim, {
      toValue: e || 18,
      duration: 150,
      useNativeDriver: false
    }).start();
    Animated.timing(this.state.opacAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false
    }).start();
  }

  floatUp(e) {
    Animated.timing(this.state.topAnim, {
      toValue: e || -22,
      duration: 150,
      useNativeDriver: false
    }).start();
    Animated.timing(this.state.opacAnim, {
      toValue: 0.7,
      duration: 150,
      useNativeDriver: false
    }).start();
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().roundedInputGroup
    };

    return computeProps(this.props, defaultProps);
  }

  renderChildren() {
    const newChildren = [];
    const childrenArray = React.Children.toArray(this.props.children);

    let label = [];
    let labelProps = {};
    label = remove(childrenArray, item => {
      if (item.type === Label) {
        labelProps = item.props;
        return item;
      }
      return null;
    });

    let inputProps = {};
    remove(childrenArray, item => {
      if (item.type === Input) {
        inputProps = item.props;
        this.inputProps = item.props;
        return item;
      }
      return null;
    });

    let icon = [];
    let iconProps = {};
    icon = remove(childrenArray, item => {
      if (item.type === Icon) {
        iconProps = item.props;
        return item;
      }
      return null;
    });

    let image = [];
    image = remove(childrenArray, item => {
      if (item.type === Thumbnail) {
        return item;
      }
      return null;
    });

    if (this.props.floatingLabel && icon.length) {
      let flag = true;
      let isIcon = false;

      for (let i = 0; i < this.props.children.length; i++) {
        if (
          this.props.children[i].props.name &&
          this.props.children[i].type.displayName !== 'Styled(Input)'
        ) {
          isIcon = true;
          newChildren.push(
            <Icon key={[i]} {...this.props.children[i].props} />
          );
        }

        if (
          (this.props.children[i].props.children ||
            this.props.children[i].props.placeholder) &&
          flag
        ) {
          flag = false;

          newChildren.push(
            <Animated.View
              key="float"
              style={{
                position: 'absolute',
                left:
                  this.props.last && isIcon
                    ? 40
                    : this.props.last
                    ? 15
                    : isIcon
                    ? 26
                    : 0,
                right: 0,
                top: this.state.topAnim,
                opacity: this.state.opacAnim,
                paddingTop: Platform.OS === 'ios' ? undefined : undefined,
                paddingBottom: Platform.OS === 'ios' ? undefined : 12
              }}
            >
              <Label {...labelProps}>
                {this.renderLabel(label, labelProps)}
              </Label>
            </Animated.View>
          );

          newChildren.push(
            <Input
              ref={c => (this._inputRef = c)}
              key="l2"
              {...inputProps}
              placeholder={this.getPlacholderValue(inputProps)}
              onFocus={() => {
                this.setState({ isFocused: true });
                if (inputProps.onFocus) {
                  inputProps.onFocus();
                }
              }}
              onBlur={e => {
                if (inputProps.value) {
                  this.setState({
                    isFocused: true
                  });
                } else if (!this.state.text.length) {
                  this.setState({ isFocused: false });
                }

                if (inputProps.onBlur) {
                  inputProps.onBlur(e);
                }
              }}
              onChangeText={text => {
                this.setState({ text });
                if (inputProps.onChangeText) {
                  inputProps.onChangeText(text);
                }
              }}
            />
          );
        }
      }
    } else if (this.props.floatingLabel && image.length) {
      let isImage = false;
      for (let i = 0; i < this.props.children.length; i++) {
        if (this.props.children[i].type.displayName === 'Styled(Thumbnail)') {
          isImage = true;

          newChildren.push(
            <Thumbnail
              small
              key={[i]}
              {...this.props.children[i].props}
              style={{
                right: 10,
                left: i === this.props.children.length - 1 ? undefined : 0
              }}
            />
          );
        }

        if (this.props.children[i].props.children) {
          newChildren.push(
            <Animated.View
              key="float"
              style={{
                position: 'absolute',
                left:
                  this.props.last && isImage
                    ? 57
                    : this.props.last
                    ? 15
                    : isImage
                    ? 42
                    : 0,
                right: 0,
                top: this.state.topAnim,
                opacity: this.state.opacAnim,
                paddingTop: Platform.OS === 'ios' ? undefined : undefined,
                paddingBottom: Platform.OS === 'ios' ? undefined : 12
              }}
            >
              <Label {...labelProps}>
                {this.renderLabel(label, labelProps)}
              </Label>
            </Animated.View>
          );

          newChildren.push(
            <Input
              ref={c => (this._inputRef = c)}
              key="l2"
              {...inputProps}
              placeholder={this.getPlacholderValue(inputProps)}
              onFocus={() => {
                this.setState({ isFocused: true });
                inputProps.onFocus && inputProps.onFocus();
              }}
              onBlur={e => {
                inputProps.value
                  ? this.setState({ isFocused: true })
                  : !this.state.text.length &&
                    this.setState({ isFocused: false });
                inputProps.onBlur && inputProps.onBlur(e);
              }}
              onChangeText={text => {
                this.setState({ text });
                inputProps.onChangeText && inputProps.onChangeText(text);
              }}
              style={{
                left:
                  this.props.last && isImage
                    ? 10
                    : this.props.last
                    ? 4
                    : isImage
                    ? 10
                    : 0,
                marginRight: 12
              }}
            />
          );
        }
      }
    } else if (this.props.floatingLabel) {
      newChildren.push(
        <Animated.View
          key="float"
          style={{
            position: 'absolute',
            left: this.props.last ? 15 : 0,
            right: 0,
            top: this.state.topAnim,
            opacity: this.state.opacAnim,
            paddingTop: Platform.OS === 'ios' ? undefined : undefined,
            paddingBottom: Platform.OS === 'ios' ? undefined : 12
          }}
        >
          <Label {...labelProps}>{this.renderLabel(label, labelProps)}</Label>
        </Animated.View>
      );

      newChildren.push(
        <Input
          ref={c => (this._inputRef = c)}
          value={this.state.text}
          key="l2"
          {...inputProps}
          placeholder={this.getPlacholderValue(inputProps)}
          onFocus={() => {
            this.setState({ isFocused: true });
            inputProps.onFocus && inputProps.onFocus();
          }}
          onBlur={e => {
            inputProps.value
              ? this.setState({ isFocused: true })
              : !this.state.text.length && this.setState({ isFocused: false });
            inputProps.onBlur && inputProps.onBlur(e);
          }}
          onChangeText={text => {
            this.setState({ text });
            inputProps.onChangeText && inputProps.onChangeText(text);
          }}
        />
      );
    } else if (this.props.stackedLabel && icon.length) {
      newChildren.push(
        <View
          key="s"
          style={{
            flexDirection: 'row',
            flex: 1,
            width: variables.deviceWidth - 15
          }}
        >
          <Icon key="s1" {...iconProps} />
          <View style={{ flexDirection: 'column' }}>
            <Label key="s2" {...labelProps} />
            <Input
              key="s3"
              {...inputProps}
              style={{ width: variables.deviceWidth - 40 }}
            />
          </View>
        </View>
      );
    } else {
      return this.props.children;
    }
    return newChildren;
  }

  renderLabel(label, labelProps) {
    const newLabel = [];
    const labelStyle = StyleSheet.flatten([
      { fontSize: 15, lineHeight: 30 },
      labelProps.style
    ]);
    if (this.props.floatingLabel) {
      if (this.state.isFocused) {
        newLabel.push(
          React.createElement(Label, {
            ...labelProps,
            key: 'newFLabel',
            float: true,
            style: labelStyle
          })
        );
        this.floatUp(-16);
      } else {
        newLabel.push(label);
        this.floatBack(labelProps.floatBack);
      }
    } else {
      newLabel.push(
        React.createElement(Label, {
          ...labelProps,
          key: 'newLabel'
        })
      );
    }
    return newLabel;
  }

  render() {
    return (
      <TouchableOpacity
        ref={c => (this._root = c)}
        {...this.prepareRootProps()}
        activeOpacity={1}
      >
        {this.renderChildren()}
      </TouchableOpacity>
    );
  }
}

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

const StyledItem = connectStyle('NativeBase.Item', {}, mapPropsToStyleNames)(
  Item
);

export { StyledItem as Item };
