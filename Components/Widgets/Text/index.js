/* @flow */
'use strict';

import React from 'react';
import {Text} from 'react-native';
import NativeBaseComponent from '../../Base/NativeBaseComponent';
import computeProps from '../../../Utils/computeProps';


export default class TextNB extends NativeBaseComponent {

  propTypes: {
        style : React.PropTypes.object
    }

  prepareRootProps() {

    var type = {
      color: this.getContextForegroundColor(),
      fontSize: this.getTheme().fontSizeBase,
      lineHeight: this.getTheme().lineHeight,
      fontFamily: this.getTheme().fontFamily,
      backgroundColor: this.getTheme().textBgColor
    }

    var defaultProps = {
      style: type
    }

    return computeProps(this.props, defaultProps);

  }
  render() {
    return(
      <Text ref={c => this._root = c} {...this.prepareRootProps()}>{this.props.children}</Text>
    );
  }

}
