import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import NativeButton from './NativeButton';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class SwipeoutBtn extends Component {
  static get defaultProps() {
    return {
      backgroundColor: null,
      color: null,
      component: null,
      underlayColor: null,
      height: 0,
      key: null,
      onPress: null,
      disabled: false,
      text: 'Click me',
      type: '',
      width: 0,
    };
  }
  render() {
    var btn = this.props;

    var styleSwipeoutBtn = [styles.swipeoutBtn];

    //  apply "type" styles (delete || primary || secondary)
    if (btn.type === 'delete') styleSwipeoutBtn.push(styles.colorDelete);
    else if (btn.type === 'primary') styleSwipeoutBtn.push(styles.colorPrimary);
    else if (btn.type === 'secondary') styleSwipeoutBtn.push(styles.colorSecondary);

    //  apply background color
    if (btn.backgroundColor) styleSwipeoutBtn.push([{ backgroundColor: btn.backgroundColor }]);

    styleSwipeoutBtn.push([{
      height: btn.height,
      width: btn.width,
    }]);

    var styleSwipeoutBtnComponent = [];

    //  set button dimensions
    styleSwipeoutBtnComponent.push([{
      height: btn.height,
      width: btn.width,
    }]);

    var styleSwipeoutBtnText = [styles.swipeoutBtnText];

    //  apply text color
    if (btn.color) styleSwipeoutBtnText.push([{ color: btn.color }]);

    //  apply text color
    if (btn.color) styleSwipeoutBtnText.push([{ color: btn.color }])
    return (
      <NativeButton
        onPress={this.props.onPress}
        style={styles.swipeoutBtnTouchable}
        underlayColor={this.props.underlayColor}
        disabled={this.props.disabled}
        style={styleSwipeoutBtn}
        textStyle={styleSwipeoutBtnText}>
        {
          (btn.component ?
            <View style={styleSwipeoutBtnComponent}>{btn.component}</View>
            :
            btn.text
          )
        }
      </NativeButton>
    );
  }
}


SwipeoutBtn.propTypes = {
  ...Text.propTypes,
  style: React.PropTypes.object,
};

const StyledSwipeoutBtn = connectStyle('NativeBase.SwipeoutBtn', {}, mapPropsToStyleNames)(SwipeoutBtn);

export {
  StyledSwipeoutBtn as SwipeoutBtn,
};
