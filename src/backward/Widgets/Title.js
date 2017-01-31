import React from 'react';
import { Platform, View } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import { Text } from './Text';
import computeProps from '../../Utils/computeProps';


class Title extends NativeBaseComponent {


  prepareRootProps() {
    const type = {
      fontFamily: this.getTheme().btnFontFamily,
      fontWeight: (Platform.OS === 'ios') ? '500' : undefined,
      alignSelf: (Platform.OS === 'ios') ? 'center' : 'flex-start',
    };

    const defaultProps = {
      style: type,
    };

    return computeProps(this.props, defaultProps);
  }

  render() {
    return (
      <View style={{ justifyContent: 'center' }}><Text ref={c => this._root = c} {...this.prepareRootProps()} numberOfLines={1}>{this.props.children}</Text></View>
    );
  }
}

Title.propTypes = {
  ...Text.propTypes,
  style: React.PropTypes.object,
};

const StyledTitle = connectStyle('NativeBase.Title', {}, mapPropsToStyleNames)(Title);
export {
  StyledTitle as Title,
};
