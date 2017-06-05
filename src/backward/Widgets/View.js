/* @flow */


import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';


class ViewNB extends NativeBaseComponent {
  render() {
    return (
    	<View ref={c => this._root = c} {...this.props}></View>
    );
  }
}

ViewNB.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object,
};

const StyledViewNB = connectStyle('NativeBase.ViewNB', {}, mapPropsToStyleNames)(ViewNB);
export {
  StyledViewNB as ViewNB,
};
