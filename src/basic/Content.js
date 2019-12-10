import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import variable from '../theme/variables/platform';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import getStyle from '../utils/getStyle';

class Content extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  render() {

    const themeVars = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;

    if (this.props.cover) {
      return this.renderScrollView(themeVars);
    }

    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: getStyle(style).backgroundColor
      }} >
        { this.renderScrollView(themeVars) }
      </SafeAreaView>
    );

  }

  renderScrollView (themeVars) {

    const {
      children,
      contentContainerStyle,
      cover,
      disableKBDismissScroll,
      keyboardShouldPersistTaps,
      padder,
      style
    } = this.props;

    return (
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        resetScrollToCoords={disableKBDismissScroll ? null : { x: 0, y: 0 }}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
        ref={c => {
          this._scrollview = c;
          this._root = c;
        }}
        {...this.props}
        contentContainerStyle={[
          { flex: 1, padding: padder ? themeVars.contentPadding : undefined },
          contentContainerStyle
        ]}
      >
        {children}
      </KeyboardAwareScrollView>
    );
  }

}

Content.propTypes = {
  cover: PropTypes.bool,
  disableKBDismissScroll: PropTypes.bool,
  keyboardShouldPersistTaps: PropTypes.string,
  padder: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledContent = connectStyle(
  'NativeBase.Content',
  {},
  mapPropsToStyleNames
)(Content);

export { StyledContent as Content };
