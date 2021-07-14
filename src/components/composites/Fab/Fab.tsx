import React, { memo, forwardRef } from 'react';
import { Button } from '../../primitives/Button';
import type { IFabProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { OverlayContainer } from '@react-native-aria/overlays';

const Fab = (
  { label, icon, renderInPortal = true, ...props }: IFabProps,
  ref: any
) => {
  const themeProps = usePropsResolution('FAB', props);
  const { placement, placementProps, ...newProps } = themeProps;

  const fabComponent = (
    <Button
      {...placementProps[placement]}
      ref={ref}
      startIcon={icon}
      {...newProps}
    >
      {label}
    </Button>
  );

  return renderInPortal ? (
    <OverlayContainer>{fabComponent}</OverlayContainer>
  ) : (
    fabComponent
  );
};

export default memo(forwardRef(Fab));
