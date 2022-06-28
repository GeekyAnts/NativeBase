import React from 'react';
import type { IScaleFadeProps } from './types';
import PresenceTransition from './PresenceTransition';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/';

const ScaleFade = ({ children, ...props }: IScaleFadeProps, ref?: any) => {
  const {
    in: animationState,
    duration,
    initialScale,
    ...resolvedProps
  } = usePropsResolution('ScaleFade', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  if (duration) {
    resolvedProps.animate.transition.duration = duration;
    resolvedProps.exit.transition.duration = duration;
  }
  if (initialScale) {
    resolvedProps.animate.initial.scale = initialScale;
    resolvedProps.exit.initial.scale = initialScale;
  }

  return (
    <PresenceTransition visible={animationState} {...resolvedProps} ref={ref}>
      {children}
    </PresenceTransition>
  );
};

export default React.memo(React.forwardRef(ScaleFade));
