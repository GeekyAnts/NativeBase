import React from 'react';
import Box from '../../primitives/Box';
import Text from '../../primitives/Text';
import View from '../../primitives/View';
import type { IToastProps } from './types';
import { useThemeProps } from '../../../hooks';
import { AccessibilityInfo, Platform } from 'react-native';

const ToastItem = ({
  title,
  accessibilityAnnouncement,
  offset,
  ...props
}: IToastProps) => {
  let { _title, ...newProps } = useThemeProps('Toast', props);

  React.useEffect(() => {
    if (accessibilityAnnouncement && Platform.OS === 'ios') {
      AccessibilityInfo.announceForAccessibility(accessibilityAnnouncement);
    }
  }, [accessibilityAnnouncement]);

  return (
    <View safeArea>
      <Box ml={offset?.x} mt={offset?.y} {...newProps}>
        <Text {..._title}>{title}</Text>
      </Box>
    </View>
  );
};

export default React.memo(ToastItem);
