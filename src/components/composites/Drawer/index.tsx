import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import Backdrop from '../Backdrop';
import Box from '../../primitives/Box';

type DrawerProps = {
  placement?: 'top' | 'left' | 'right' | 'bottom';
  children?: any;
  isOpen: boolean;
  onClose?: () => void;
};

const Drawer = ({
  children,
  isOpen,
  onClose,
  placement = 'right',
}: DrawerProps) => {
  let placementStyles = React.useMemo(() => {
    let styles: any = {
      position: 'absolute',
    };

    if (placement === 'top') {
      styles.top = 0;
      styles.left = 0;
      styles.right = 0;
      styles.width = '100%';
    } else if (placement === 'bottom') {
      styles.bottom = 0;
      styles.left = 0;
      styles.right = 0;
      styles.width = '100%';
    } else if (placement === 'right') {
      styles.right = 0;
      styles.top = 0;
      styles.bottom = 0;
      styles.height = '100%';
    } else {
      styles.top = 0;
      styles.bottom = 0;
      styles.left = 0;
      styles.height = '100%';
    }
    return styles;
  }, [placement]);

  if (!isOpen) return null;

  return (
    <OverlayContainer>
      <Backdrop onPress={onClose ? onClose : () => {}} />
      <Box {...placementStyles} opacity={1}>
        {children}
      </Box>
    </OverlayContainer>
  );
};

export default Drawer;
