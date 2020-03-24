import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Label extends Component {

  render() {
    let {
      required,
      children,
      ...restProps
    } = this.props;

    if (required) {
      children += " *";
    }

    return (
      <Text ref={c => (this._root = c)} {...restProps} >
        {children}
      </Text>
    );
  }
}

Label.propTypes = {
  ...Text.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  floatBack: PropTypes.number,
  required: PropTypes.bool,
};

const StyledLabel = connectStyle('NativeBase.Label', {}, mapPropsToStyleNames)(
  Label
);

export { StyledLabel as Label };
