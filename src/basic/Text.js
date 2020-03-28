import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text as RNText
} from 'react-native';
import {
  isString as _isString,
  toUpper  as _toUpper
} from 'lodash';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Text extends Component {

  render() {

    const {
      uppercase,
      children,
      ...rnTextProps
    } = this.props;

    let text;
    if (uppercase) {
      text = React.Children.map(children, child => {
        if (_isString(child)) {
          return _toUpper(child);
        }
        return child;
      });
    } else {
      text = children;
    }

    //console.debug(StyleSheet.flatten(rnTextProps.style));

    return (
      <RNText ref={c => (this._root = c)}
        {...rnTextProps}
      >
        {text}
      </RNText>
    );
  }
}

Text.propTypes = {
  ...RNText.propTypes,
  uppercase: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

Text.defaultProps = {
  uppercase: false
};

const StyledText = connectStyle('NativeBase.Text', {}, mapPropsToStyleNames)(
  Text
);

export { StyledText as Text };
