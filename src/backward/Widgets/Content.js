import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';

class Content extends NativeBaseComponent {
  render() {
    return (
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={this.props.contentContainerStyle}
        resetScrollToCoords={(this.props.disableKBDismissScroll) ? null : { x: 0, y: 0 }}
        ref={(c) => { this._scrollview = c; this._root = c; }}
        {...this.props}
      >
        {this.props.children}
      </KeyboardAwareScrollView>
    );
  }
}

Content.propTypes = {
  ...KeyboardAwareScrollView.propTypes,
  style: React.PropTypes.object,
  padder: React.PropTypes.bool,
  disableKBDismissScroll: React.PropTypes.bool,
};

const StyledContent = connectStyle('NativeBase.Content', {}, mapPropsToStyleNames)(Content);

export {
  StyledContent as Content,
};
