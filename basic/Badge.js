import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Badge extends Component {


  renderChildren() {
    if (typeof this.props.children !== 'string') {
      return this.props.children;
    } else {
      const newChildren = [];
      newChildren.push(<Text key="label" style={this.props.textStyle}>{this.props.children}</Text>);
      return newChildren;
    }
  }

  render() {
    return (
      <View ref={c => this._root = c} {...this.props}>
        {this.renderChildren()}
      </View>
    );
  }

  }

const childrenType = function childrenType(props, propName, component) {
  let error;
  const prop = props[propName];
  React.Children.forEach(prop, (child) => {
    if ((typeof child !== 'string') && (child.type.displayName !== 'Styled(Icon)') && (child.type.displayName !== 'Styled(Text)')) {
      error = new Error(`${component} can have only Text or Icon components`);
    }
  });
  return error;
};
Badge.propTypes = {
  ...View.propTypes,
  children: childrenType,
  style: React.PropTypes.object,
};

const StyledBadge = connectStyle('NativeBase.Badge', {}, mapPropsToStyleNames)(Badge);

export {
  StyledBadge as Badge,
};
