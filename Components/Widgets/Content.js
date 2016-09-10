/* @flow */
'use strict';

import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';


export default class Content extends NativeBaseComponent {

  propTypes: {
      padder: React.PropTypes.bool,
      style : React.PropTypes.object,
      disableKBDismissScroll: React.PropTypes.bool
    }

  prepareRootProps() {

    var type = {
      backgroundColor: 'transparent',
      flex: 1
    }

    var defaultProps = {
      style: type,
      resetScrollToCoords: (this.props.disableKBDismissScroll) ? null : {
        x: 0,
        y: 0
      }
    }

    return computeProps(this.props, defaultProps);
  }

  render() {
    const contentContainerStyle = this.props.contentContainerStyle || {};
    contentContainerStyle.padding = (this.props.padder) ? this.getTheme().contentPadding : 0;
    return(
      <KeyboardAwareScrollView ref={c => this._scrollview = c} {...this.prepareRootProps()} contentContainerStyle={contentContainerStyle}>{this.props.children}</KeyboardAwareScrollView>
    );
  }
}
