
import React, { Component } from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Footer extends Component {

  render() {
    return (
      <View ref={c => this._root = c} {...this.props} />
    );
  }
}

Footer.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledFooter = connectStyle('NativeBase.Footer', {}, mapPropsToStyleNames)(Footer);
export {
  StyledFooter as Footer,
};
