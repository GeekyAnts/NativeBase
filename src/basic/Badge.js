import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';

import { connectStyle } from 'native-base-shoutem-theme';
import variables from '../theme/variables/platform';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Badge extends Component {


  render() {
    return (
      <View ref={c => this._root = c} {...this.props}>
        {this.props.children}
      </View>
    );
  }

}


Badge.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object,
};

const StyledBadge = connectStyle('NativeBase.Badge', {}, mapPropsToStyleNames)(Badge);

export {
  StyledBadge as Badge,
};
