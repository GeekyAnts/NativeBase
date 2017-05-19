import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';

import { connectStyle } from 'native-base-shoutem-theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class FooterTab extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}

FooterTab.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object,
};

const StyledFooterTab = connectStyle('NativeBase.FooterTab', {}, mapPropsToStyleNames)(FooterTab);

export {
  StyledFooterTab as FooterTab,
};
