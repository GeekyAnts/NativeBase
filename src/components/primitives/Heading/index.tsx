import React, { memo, forwardRef } from 'react';
import Text from '../Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IHeadingProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Heading = (props: IHeadingProps, ref: any) => {
  const resolvedProps = usePropsResolution('Heading', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  function getAccessibilityLevel() {
    switch (props.as) {
      case 'h2':
        return 2;
      case 'h3':
        return 3;
      case 'h4':
        return 4;
      case 'h5':
        return 5;
      case 'h6':
        return 6;
      default:
        return 1;
    }
  }

  return (
    <Text
      {...resolvedProps}
      ref={ref}
      // @ts-ignore
      accessibilityRole="heading"
      accessibilityLevel={getAccessibilityLevel()}
    />
  );
};

export default memo(forwardRef(Heading));
export type { IHeadingProps };
