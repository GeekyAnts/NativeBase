import React, { memo, forwardRef } from 'react';
import { Button } from '../../primitives/Button';
import type { IFabProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { OverlayContainer } from '@react-native-aria/overlays';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { extractInObject } from '../../../theme/tools/utils';

const Fab = ({ ...props }: IFabProps, ref: any) => {
  /** Extracting Button Specific Props */
  const [buttonProps, remainingProps] = extractInObject(props, [
    'variant',
    '_pressed',
    '_hover',
    '_text',
    '_focus',
    '_stack',
    '_loading',
    '_disabled',
    '_spinner',
  ]);
  const themeProps = usePropsResolution('FAB', remainingProps);

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
      {...buttonProps}
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
