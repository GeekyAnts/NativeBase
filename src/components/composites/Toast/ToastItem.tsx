import React from 'react';
import Text from '../../primitives/Text';
import Box from '../../primitives/Box';
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
    <Box safeArea>
      <Box ml={offset?.x} mt={offset?.y} {...newProps}>
        <Text {..._title}>{title}</Text>
      </Box>
    </Box>
  );
};

export default React.memo(ToastItem);
