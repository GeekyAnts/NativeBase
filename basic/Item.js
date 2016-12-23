import React, { Component } from 'react';
import { TouchableOpacity, Animated, Platform } from 'react-native';
import { Input, Label } from 'native-base';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      topAnim: new Animated.Value(18),
      opacAnim: new Animated.Value(1),
    };
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

  floatUp() {
    Animated.timing(this.state.topAnim, {
      toValue: 0,
      duration: 150,
    }).start();
    Animated.timing(this.state.opacAnim, {
      toValue: 0.5,
      duration: 150,
    }).start();
  }

  renderLabel(label, labelProps) {
    const newLabel = [];
    if (this.props.floatingLabel) {
      if (this.state.text) {
        newLabel.push(React.createElement(
          Label,
          {
            ...labelProps,
            key: 'newFLabel',
            float: true,
          }
        ));
        this.floatUp();
      } else {
        newLabel.push(label);
        this.floatBack();
      }
    } else if (this.state.text) {
      newLabel.push(React.createElement(
          Label,
        {
          ...labelProps,
          key: 'newLabel',
          focused: true,
        }
        ));
    } else {
      newLabel.push(label);
    }
    return newLabel;
  }

  renderChildren() {
    const newChildren = [];
    const childrenArray = React.Children.toArray(this.props.children);

    let label = [];
    let labelProps = {};
    label = _.remove(childrenArray, (item) => {
      if (item.type === Label) {
        labelProps = item.props;
        return item;
      }
    });

    let input = [];
    let inputProps = {};
    input = _.remove(childrenArray, (item) => {
      if (item.type === Input) {
        inputProps = item.props;
        return item;
      }
    });
    if (label.length && input.length) {
      if (!this.props.inlineLabel && !this.props.stackedLabel && !this.props.fixedLabel) {
        newChildren.push((this.props.floatingLabel) ? <Animated.View key="float" style={{ position: 'absolute', left: 0, right: 0, top: this.state.topAnim, opacity: this.state.opacAnim, paddingTop: (Platform.OS === 'ios') ? undefined : 30 }}>{this.renderLabel(label, labelProps)}</Animated.View> : this.renderLabel(label, labelProps));
        newChildren.push(<Input key="l2" {...inputProps} onChangeText={text => this.setState({ text })} />);
      } else {
        return this.props.children;
      }
    }
    return newChildren;
  }
  render() {
    return (
      <TouchableOpacity ref={c => this._root = c} {...this.props} activeOpacity={1}>
        {this.renderChildren()}
      </TouchableOpacity>
    );
  }
}

const childrenType = function (props, propName, component) {
  let error;
  const prop = props[propName];
  if (!props.children.length) {
    error = new Error(`${component} should have both Label and Input components`);
  } else if (props.children[0].type.displayName !== 'Styled(Label)' || props.children[1].type.displayName !== 'Styled(Input)') {
    error = new Error(`${component} should have Label and Input components only`);
  }
  return error;
};

Item.propTypes = {
  ...TouchableOpacity.propTypes,
  children: childrenType,
  style: React.PropTypes.object,
  inlineLabel: React.PropTypes.bool,
  floatingLabel: React.PropTypes.bool,
  stackedLabel: React.PropTypes.bool,
  fixedLabel: React.PropTypes.bool,
  success: React.PropTypes.bool,
  error: React.PropTypes.bool,
};

const StyledItem = connectStyle('NativeBase.Item', {}, mapPropsToStyleNames)(Item);

export {
  StyledItem as Item,
};
