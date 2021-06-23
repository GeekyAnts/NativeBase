import React, { memo, forwardRef } from 'react';
import { Transition } from './Transition';
import { AnimatedPresenceContext } from './AnimatedPresence';
import type { IPresenceTransitionProps } from './types';

const PresenceTransition = (
  {
    visible: propVisible,
    onTransitionComplete,
    ...rest
  }: IPresenceTransitionProps,
  ref: any
) => {
  const { setSafeToUnmount, visible } = React.useContext(
    AnimatedPresenceContext
  );

  const trueVisible = propVisible ?? visible;

  const [animationExited, setAnimationExited] = React.useState(true);
  if (!trueVisible && animationExited) {
    return null;
  }

  return (
    <Transition
      visible={trueVisible}
      onTransitionComplete={(state) => {
        if (state === 'exited') {
          setAnimationExited(true);
          setSafeToUnmount(true);
        } else {
          setAnimationExited(false);
        }
        onTransitionComplete && onTransitionComplete(state);
      }}
      {...rest}
      ref={ref}
    />
  );
};

export default memo(forwardRef(PresenceTransition));
