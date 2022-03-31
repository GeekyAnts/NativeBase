import React from 'react';
import type { IScaleFadeProps } from './types';
import PresenceTransition from './PresenceTransition';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/';

const ScaleFade = ({ children, ...props }: IScaleFadeProps, ref?: any) => {
  const { in: animationState, ...resolvedProps } = usePropsResolution(
    'ScaleFade',
    props
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <PresenceTransition visible={animationState} {...resolvedProps} ref={ref}>
      {children}
    </PresenceTransition>
  );
};

export default React.memo(React.forwardRef(ScaleFade));
