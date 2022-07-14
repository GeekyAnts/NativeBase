import React from 'react';
import PresenceTransition from '../Transitions/PresenceTransition';
import type { IFadeProps } from './types';
import { usePropsResolution } from '../../../hooks/';

const Fade = ({ children, ...props }: IFadeProps, ref?: any) => {
  const {
    in: animationState,
    entryDuration,
    exitDuration,
    ...resolvedProps
  } = usePropsResolution('Fade', props);

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
