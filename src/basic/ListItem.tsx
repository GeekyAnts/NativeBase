import React, { PureComponent } from 'react';
import {
  TouchableHighlight,
  Platform,
  TouchableNativeFeedback,
  View,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedbackProps,
  StyleSheet,
} from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';
interface ListItemProps extends TouchableWithoutFeedbackProps {
  style?: StyleProp<ViewStyle>;
  touchableHighlightStyle?: object | any[];
  itemDivider?: boolean;
  button?: boolean;
  thumbnail?: boolean;
}

class ListItem extends PureComponent<ListItemProps, {}> {
  render() {
    const variables = this.context.theme ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;

    if (
      Platform.OS === 'ios' ||
      Platform.OS === 'web' ||
      variables.androidRipple === false ||
      (!this.props.onPress && !this.props.onLongPress) ||
      Platform.Version <= 21
    ) {
      return (
        <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}
          underlayColor={variables.listBtnUnderlayColor}
          {...this.props}
          style={this.props.touchableHighlightStyle}
        >
          <View {...this.props} testID={undefined}>
            {this.props.children}
          </View>
        </TouchableHighlight>
      );
    }

    return (
      <TouchableNativeFeedback {...this.props}>
        <View style={styles.container}>
          <View {...this.props} testID={undefined}>
            {this.props.children}
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
const StyledListItem = connectStyle('NativeBase.ListItem', {}, mapPropsToStyleNames)(ListItem);

export { StyledListItem as ListItem };

const styles = StyleSheet.create({
  container: { marginLeft: -17, paddingLeft: 17 },
});
