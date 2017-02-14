/* @flow */


import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import _ from 'lodash';
import variables from '../../theme/variables/platform';
import { Icon } from './Icon';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import computeProps from '../../Utils/computeProps';
import { Text } from './Text';


class Button extends Component {


  getInitialStyle() {
    return {
      borderedBtn: {
        borderWidth: (this.props.bordered) ? 1 : undefined,
        borderRadius: (this.props.rounded && this.props.bordered) ? variables.borderRadiusLarge : 2,
      },
    };
  }

  iconPresent() {
    let iconComponentPresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child.type === Icon) { iconComponentPresent = true; }
    });
    return iconComponentPresent;
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().borderedBtn,
    };

    return computeProps(this.props, defaultProps);
  }

  renderChildren() {
    if (typeof this.props.children === 'string') {
      return <Text style={this.props.textStyle}>{(Platform.OS === 'ios' || !this.props.capitalize) ? this.props.children : this.props.children.toUpperCase()}</Text>;
    } else if (this.props.children.type === Icon) {
      return React.cloneElement(this.props.children);
    } else if (Array.isArray(this.props.children)) {
      const newChildren = [];

      const childrenArray = React.Children.toArray(this.props.children);

      let iconElement = [];
      iconElement = _.remove(childrenArray, (item) => {
        if (item.type === Icon) {
          return true;
        }
        return null;
      });

      if (this.props.iconRight) {
        if (childrenArray[0].type === undefined) {
          newChildren.push(<Text key="label">{(Platform.OS === 'ios' || !this.props.capitalize) ? childrenArray[0] : childrenArray[0].toUpperCase()}</Text>);
        } else {
          newChildren.push(<Text key="label">{(Platform.OS === 'ios' || !this.props.capitalize) ? childrenArray[0].props.children : childrenArray[0].props.children.toUpperCase()}</Text>);
        }

        newChildren.push(React.cloneElement(iconElement[0]));
      } else if (this.props.iconLeft || iconElement.length > 0) {
        newChildren.push(React.cloneElement(iconElement[0]));

        if (childrenArray[0].type === undefined) {
          newChildren.push(<Text key="label">{(Platform.OS === 'ios' || !this.props.capitalize) ? childrenArray[0] : childrenArray[0].toUpperCase()}</Text>);
        } else {
          newChildren.push(<Text key="label">{(Platform.OS === 'ios' || !this.props.capitalize) ? childrenArray[0].props.children : childrenArray[0].props.children.toUpperCase()}</Text>);
        }
      } else {
        return <Text>{this.props.children}</Text>;
      }

      return newChildren;
    }
    return React.cloneElement(this.props.children);
  }

  render() {
    return (
      <TouchableOpacity
        ref={(c) => { this._root = c; }}
        {...this.prepareRootProps()} activeOpacity={0.5}
      >
        {this.renderChildren()}
      </TouchableOpacity>
    );
  }
}


Button.propTypes = {
  ...TouchableOpacity.propTypes,
  style: React.PropTypes.object,
  textStyle: React.PropTypes.object,
  block: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  transparent: React.PropTypes.bool,
  success: React.PropTypes.bool,
  danger: React.PropTypes.bool,
  warning: React.PropTypes.bool,
  info: React.PropTypes.bool,
  bordered: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  rounded: React.PropTypes.bool,
  large: React.PropTypes.bool,
  small: React.PropTypes.bool,
  inputButton: React.PropTypes.bool,
  tabButton: React.PropTypes.bool,
};


const StyledButton = connectStyle('NativeBase.Button', {}, mapPropsToStyleNames)(Button);
export {
  StyledButton as Button,
};
