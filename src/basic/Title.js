import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Title extends Component {
  render() {

    const {
      h1, h2, h3, h4, h5, h6,
      ...restProps
    } = this.props;

    return (
      <Text ref={c => (this._root = c)} numberOfLines={1} {...restProps} />
    );
  }
}

Title.propTypes = {
  ...Text.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledTitle = connectStyle('NativeBase.Title', {}, mapPropsToStyleNames)(
  Title
);
export { StyledTitle as Title };
