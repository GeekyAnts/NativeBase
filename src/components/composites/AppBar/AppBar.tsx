import React from 'react';
import { SafeAreaView } from 'react-native';
import AppBarLeft from './AppBarLeft';
import AppBarRight from './AppBarRight';
import AppBarContent from './AppBarContent';
import { Box, HStack, View, IBoxProps } from '../../primitives';
import { APPROX_STATUSBAR_HEIGHT } from './utils';

export type IAppBarProps = IBoxProps & {
  statusBarHeight?: number;
  space?: number;
};

const APPBAR_HEADER_HEIGHT = 56;
const DEFAULT_SPACING_BETWEEN_LEFT_CONTENT_AND_RIGHT = 2;
const DEFAULT_HORIZONTAL_PADDING = 2;

const AppBar = ({
  height = APPBAR_HEADER_HEIGHT,
  statusBarHeight = APPROX_STATUSBAR_HEIGHT,
  space = DEFAULT_SPACING_BETWEEN_LEFT_CONTENT_AND_RIGHT,
  ...props
}: IAppBarProps) => {
  let childMap = new Map();

  React.Children.toArray(props.children).reduce((prevVal, child) => {
    if (React.isValidElement(child)) {
      childMap.set(child.type, child);
    }
    return prevVal;
  }, childMap);

  let defaultStyle = {
    height,
    marginTop: statusBarHeight,
  };

  // If status bar height is present, no need for SafeAreaView as View will handle the topOffset using marginTop
  const Wrapper = statusBarHeight ? React.Fragment : SafeAreaView;

  return (
    <Wrapper>
      <View style={defaultStyle}>
        <Box flex={1} px={DEFAULT_HORIZONTAL_PADDING} {...props}>
          <HStack space={space} flex={1}>
            {childMap.get(AppBarLeft)}
            {childMap.get(AppBarContent)}
            {childMap.get(AppBarRight)}
          </HStack>
        </Box>
      </View>
    </Wrapper>
  );
};

AppBar.Left = AppBarLeft;
AppBar.Right = AppBarRight;
AppBar.Content = AppBarContent;

export default AppBar;
