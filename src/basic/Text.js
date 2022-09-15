import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';
import { TextPropTypes } from 'deprecated-react-native-prop-types';
import _ from 'lodash';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Text extends React.PureComponent {
  setRoot(c) {
    this._root = c;
  }

  render() {
    const { uppercase, children } = this.props;

    let text;
    if (uppercase) {
      text = React.Children.map(children, child => {
        if (_.isString(child)) {
          return _.toUpper(child);
        }
        return child;
      });
    } else {
      text = children;
    }

    return (
      <RNText ref={this.setRoot} {...this.props}>
        {text}
      </RNText>
    );
  }
}

Text.propTypes = {
  ...TextPropTypes,
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

const StyledText = connectStyle(
  'NativeBase.Text',
  {},
  mapPropsToStyleNames
)(Text);

export { StyledText as Text };
