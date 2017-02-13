import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Content extends Component {
  render() {
    return (
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
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
  enableResetScrollToCoords: React.PropTypes.bool
};

const StyledContent = connectStyle('NativeBase.Content', {}, mapPropsToStyleNames)(Content);

export {
  StyledContent as Content,
};
