import React, { memo, forwardRef } from 'react';
import { Transition } from './Transition';
import type { IPresenceTransitionProps } from './types';

const PresenceTransition = (
  { visible = false, onTransitionComplete, ...rest }: IPresenceTransitionProps,
  ref: any
) => {
  const [animationExited, setAnimationExited] = React.useState(true);
  if (!visible && animationExited) {
    return null;
  }

  return (
    <Transition
      visible={visible}
      onTransitionComplete={(state) => {
        if (state === 'exited') {
          setAnimationExited(true);
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
