import React from 'react';
import PresenceTransition from '../Transitions/PresenceTransition';
import type { IFadeProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/';

const Fade = ({ children, ...props }: IFadeProps, ref?: any) => {
  const { in: animationState, ...resolvedProps } = usePropsResolution(
    'Fade',
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

export default React.memo(React.forwardRef(Fade));
