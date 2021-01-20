import React from 'react';
import { Slide } from '../Transitions';
import type { ISnackbarProps } from './props';
import { AccessibilityInfo, Platform } from 'react-native';

const Snackbar = ({
  children,
  duration = 5000,
  accessibilityAnnouncement,
  ...props
}: ISnackbarProps) => {
  const [isOpen, setIsOpen] = React.useState(true);
  React.useEffect(() => {
    isOpen &&
      setTimeout(() => {
        setIsOpen(false);
      }, duration);
  }, [isOpen, duration]);

  React.useEffect(() => {
    if (accessibilityAnnouncement && isOpen) {
      if (Platform.OS !== 'web') {
        AccessibilityInfo.announceForAccessibility(accessibilityAnnouncement);
      } else {
        // Handle via web live regions
      }
    }
  }, [accessibilityAnnouncement, isOpen]);
  // const newProps = useThemeProps('Snackbar', props);
  return (
    <Slide in={isOpen} {...props}>
      {children}
    </Slide>
  );
};

export default React.memo(Snackbar);
