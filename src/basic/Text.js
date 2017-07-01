import React, { Component } from 'react';
import { Text as RNText } from 'react-native';
import _ from 'lodash';

import { connectStyle } from 'native-base-shoutem-theme';
import { connectAnimation } from '@shoutem/animation';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Text extends Component {
  render() {
    const {
      uppercase,
      children,
    } = this.props;

    let text;
    if (_.isArray(children) && !_.some(children, _.isObject)) {
      // children ['a', 'b'] => iOS: ab, Android: a,b
      // prevent comma in android
      text = _.join(children, '');
    } else {
      text = children;
    }

    if (uppercase) {
      text = _.toUpper(text);
    }

    return (
      <RNText ref={c => (this._root = c)} {...this.props}>
        {text}
      </RNText>
    );
  }
}

Text.propTypes = {
  ...RNText.propTypes,
  uppercase: React.PropTypes.bool,
  style: React.PropTypes.object,
};

Text.defaultProps = {
  uppercase: false,
};

const AnimatedText = connectAnimation(Text);
const StyledText = connectStyle('NativeBase.Text', {}, mapPropsToStyleNames)(
  Text
);

export { StyledText as Text };
