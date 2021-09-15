import React, { memo, forwardRef } from 'react';
import { Button } from '../../primitives/Button';
import type { IFabProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { OverlayContainer } from '@react-native-aria/overlays';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Fab = (props: IFabProps, ref: any) => {
  const themeProps = usePropsResolution('FAB', props);
  const {
    label,
    icon,
    renderInPortal,
    placement,
    placementProps,
    ...newProps
  } = themeProps;

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
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return renderInPortal ? (
    <OverlayContainer>{fabComponent}</OverlayContainer>
  ) : (
    fabComponent
  );
};

export default memo(forwardRef(Fab));
