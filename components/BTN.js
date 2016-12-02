/* @flow */
'use strict';

import React, {Component} from 'react';
import { TouchableOpacity, Platform, View } from 'react-native';
import _ from 'lodash';
import ReactNativePropRegistry from 'react/lib/ReactNativePropRegistry';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class BTN extends Component {

  render() {
    return(
      <TouchableOpacity
        {...this.props}
        ref={c => this._root = c}
        activeOpacity={0.5}
      />
    );
  }
}

BTN.propTypes = {
  ...TouchableOpacity.propTypes,
};



const StyledBTN = connectStyle('NativeBase.BTN', {}, mapPropsToStyleNames)(BTN);
export {
  StyledBTN as BTN,
};
