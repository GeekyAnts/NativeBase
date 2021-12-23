import React, { memo, forwardRef } from 'react';
import { ExitAnimationContext } from '../../primitives/Overlay/ExitAnimationContext';
import { Transition } from './Transition';
import type { IPresenceTransitionProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const PresenceTransition = (
  { visible = false, onTransitionComplete, ...rest }: IPresenceTransitionProps,
  ref: any
) => {
  // const [animationExited, setAnimationExited] = React.useState(!visible);

  const { setExited } = React.useContext(ExitAnimationContext);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(rest)) {
    return null;
  }

  return (
    <Transition
      visible={visible}
      onTransitionComplete={(state) => {
        if (state === 'exited') {
          setExited(true);
        } else {
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
