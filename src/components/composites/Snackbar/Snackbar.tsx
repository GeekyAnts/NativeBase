import React from 'react';
import { Slide } from '../Transitions';
import type { ISnackbarProps } from './types';
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
    if (accessibilityAnnouncement && isOpen && Platform.OS !== 'web') {
      AccessibilityInfo.announceForAccessibility(accessibilityAnnouncement);
    }
  }, [accessibilityAnnouncement, isOpen]);
  return (
    <Slide in={isOpen} {...props}>
      {children}
    </Slide>
  );
};

export default React.memo(Snackbar);
