import React, { memo, forwardRef } from 'react';
import { ExitAnimationContext } from '../../primitives/Overlay/ExitAnimationContext';
import { Transition } from './Transition';
import type { IPresenceTransitionProps } from './types';

const PresenceTransition = (
  { visible = false, onTransitionComplete, ...rest }: IPresenceTransitionProps,
  ref: any
) => {
  const [animationExited, setAnimationExited] = React.useState(!visible);

  const { setExited } = React.useContext(ExitAnimationContext);

  if (!visible && animationExited) {
    return null;
  }

  return (
    <Transition
      visible={visible}
      onTransitionComplete={(state) => {
        if (state === 'exited') {
          setAnimationExited(true);
          setExited(true);
        } else {
          setAnimationExited(false);
          setExited(false);
        }
        onTransitionComplete && onTransitionComplete(state);
      }}
      {...rest}
      ref={ref}
    />
  );
};

export default memo(forwardRef(PresenceTransition));
