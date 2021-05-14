import React from 'react';
import { useThemeProps } from '../../../hooks/useThemeProps';
import type { IScaleFadeProps } from './types';
import { Transition } from './Transition';

const ScaleFade = (
  { children, style, ...props }: IScaleFadeProps,
  ref?: any
) => {
  const { in: animationState, duration, initialScale } = useThemeProps(
    'ScaleFade',
    props
  );

  return (
    <Transition
      from={{ opacity: 0, scale: initialScale }}
      entry={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: initialScale }}
      style={style}
      visible={animationState}
      exitTransition={{ duration }}
      entryTransition={{ duration }}
      ref={ref}
    >
      {children}
    </Transition>
  );
};

export default React.memo(React.forwardRef(ScaleFade));
