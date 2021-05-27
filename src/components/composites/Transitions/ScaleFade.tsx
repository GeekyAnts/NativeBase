import React from 'react';
import { useThemeProps } from '../../../hooks/useThemeProps';
import type { IScaleFadeProps } from './types';
import PresenceTransition from './PresenceTransition';

const ScaleFade = (
  { children, style, ...props }: IScaleFadeProps,
  ref?: any
) => {
  const { in: animationState, duration, initialScale } = useThemeProps(
    'ScaleFade',
    props
  );

  return (
    <PresenceTransition
      initial={{ opacity: 0, scale: initialScale }}
      animate={{ opacity: 1, scale: 1, transition: { duration } }}
      exit={{ opacity: 0, scale: initialScale, transition: { duration } }}
      style={style}
      visible={animationState}
      ref={ref}
    >
      {children}
    </PresenceTransition>
  );
};

export default React.memo(React.forwardRef(ScaleFade));
