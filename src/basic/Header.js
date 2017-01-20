
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import variable from '../theme/variables';

class Header extends Component {

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor={variable.statusBarColor} />
          <View ref={c => this._root = c} {...this.props} />
      </View>
    );
  }
}

Header.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
  searchBar: React.PropTypes.bool,
  rounded: React.PropTypes.bool,
};

const StyledHeader = connectStyle('NativeBase.Header', {}, mapPropsToStyleNames)(Header);
export {
  StyledHeader as Header,
};
