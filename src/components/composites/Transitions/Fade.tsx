import React from 'react';
import PresenceTransition from '../Transitions/PresenceTransition';
import type { IFadeProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/';

const Fade = ({ children, ...props }: IFadeProps, ref?: any) => {
  const {
    in: animationState,
    entryDuration,
    exitDuration,
    ...resolvedProps
  } = usePropsResolution('Fade', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  if (entryDuration) {
    resolvedProps.animate.transition.duration = entryDuration;
  }
  if (exitDuration) {
    resolvedProps.exit.transition.duration = exitDuration;
  }

  return (
    <PresenceTransition visible={animationState} ref={ref} {...resolvedProps}>
      {children}
    </PresenceTransition>
  );
};

export default React.memo(React.forwardRef(Fade));
