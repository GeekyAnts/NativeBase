import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connectStyle } from 'native-base-shoutem-theme';

import variable from '../theme/variables/platform';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Content extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      orientation: 'portrait'
    };
  }
  layoutChange(val) {
    const maxComp = Math.max(variable.deviceWidth, variable.deviceHeight);
    if (val.width >= maxComp) this.setState({ orientation: 'landscape' });
    else {
      this.setState({ orientation: 'portrait' });
    }
  }

  calculateLeft(mode, inSet) {
    let inset = null;
    if (inSet !== undefined) {
      inset = inSet;
    } else {
      inset = variable.Inset;
    }
    const { style } = this.props;
    const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape;
    let leftPadder = null;
    if (style[1] !== undefined) {
      if (
        style[1].padding !== undefined ||
        style[1].paddingLeft !== undefined
      ) {
        leftPadder =
          (style[1].paddingLeft !== undefined
            ? style[1].paddingLeft
            : style[1].padding) + InsetValues.leftInset;
      }
    } else if (style.padding !== undefined || style.paddingLeft !== undefined) {
      leftPadder =
        (style.paddingLeft !== undefined ? style.paddingLeft : style.padding) +
        InsetValues.leftInset;
    } else {
      leftPadder = InsetValues.leftInset;
    }
    return leftPadder;
  }
  calculateRight(mode, inSet) {
    let inset = null;
    if (inSet !== undefined) {
      inset = inSet;
    } else {
      inset = variable.Inset;
    }
    const { style } = this.props;
    const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape;
    let rightPadder = null;
    if (style[1] !== undefined) {
      if (
        style[1].padding !== undefined ||
        style[1].paddingRight !== undefined
      ) {
        rightPadder =
          (style[1].paddingRight !== undefined
            ? style[1].paddingRight
            : style[1].padding) + InsetValues.rightInset;
      }
    } else if (
      style.padding !== undefined ||
      style.paddingRight !== undefined
    ) {
      rightPadder =
        (style.paddingRight !== undefined
          ? style.paddingRight
          : style.padding) + InsetValues.rightInset;
    } else {
      rightPadder = InsetValues.rightInset;
    }
    return rightPadder;
  }
  render() {
    const {
      children,
      contentContainerStyle,
      disableKBDismissScroll,
      keyboardShouldPersistTaps,
      padder,
      style
    } = this.props;
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    return variables.isIphoneX ? (
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        resetScrollToCoords={disableKBDismissScroll ? null : { x: 0, y: 0 }}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
        ref={c => {
          this._scrollview = c;
          this._root = c;
        }}
        {...this.props}
        onLayout={e => this.layoutChange(e.nativeEvent.layout)}
        style={[
          style,
          {
            paddingLeft: this.calculateLeft(
              this.state.orientation,
              variables.Inset
            ),
            paddingRight: this.calculateRight(
              this.state.orientation,
              variables.Inset
            )
          }
        ]}
        contentContainerStyle={[
          { padding: padder ? variables.contentPadding : undefined },
          contentContainerStyle
        ]}
      >
        {children}
      </KeyboardAwareScrollView>
    ) : (
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
          { padding: padder ? variables.contentPadding : undefined },
          contentContainerStyle
        ]}
      >
        {children}
      </KeyboardAwareScrollView>
    );
  }
}

Content.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  padder: PropTypes.bool,
  disableKBDismissScroll: PropTypes.bool,
  keyboardShouldPersistTaps: PropTypes.string
};

const StyledContent = connectStyle(
  'NativeBase.Content',
  {},
  mapPropsToStyleNames
)(Content);

export { StyledContent as Content };
