import React, { Component } from 'react';
import { View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
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
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledBadge = connectStyle('NativeBase.Badge', {}, mapPropsToStyleNames)(Badge);

export {
  StyledBadge as Badge,
};
