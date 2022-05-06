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
    delay,
    ...resolvedProps
  } = usePropsResolution('Fade', props);

  // Need to have similar API for all animations

  // Temporary fix
  const animationStyle = {
    style: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: entryDuration, delay } },
      exit: { opacity: 0, transition: { duration: exitDuration, delay } },
    },
  };

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <PresenceTransition
      visible={animationState}
      {...animationStyle.style}
      {...resolvedProps}
      ref={ref}
    >
      {children}
    </PresenceTransition>
  );
};

export default React.memo(React.forwardRef(Fade));
