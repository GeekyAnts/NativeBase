import React from 'react';
import { useThemeProps } from '../../../hooks/useThemeProps';
import { Transition } from '../Transitions';
import type { IFadeProps } from './types';

const Fade = ({ children, style, ...props }: IFadeProps, ref?: any) => {
  const { in: animationState, entryDuration, exitDuration } = useThemeProps(
    'Fade',
    props
  );
  return (
    <Transition
      from={{ opacity: 0 }}
      entry={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={style}
      visible={animationState}
      exitTransition={{ duration: exitDuration }}
      entryTransition={{ duration: entryDuration }}
      ref={ref}
    >
      {children}
    </Transition>
  );
};

export default React.memo(React.forwardRef(Fade));
