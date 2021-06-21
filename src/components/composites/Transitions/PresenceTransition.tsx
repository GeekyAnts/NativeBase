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

  return (
    <Transition
      visible={propVisible ?? visible}
      onTransitionComplete={(state) => {
        if (state === 'exited') {
          setSafeToUnmount(true);
        }
        onTransitionComplete && onTransitionComplete(state);
      }}
      {...rest}
      ref={ref}
    />
  );
};

export default memo(forwardRef(PresenceTransition));
