import React from 'react';
import { useThemeProps } from '../../../hooks/useThemeProps';
import { Transition } from '../Transitions/Transition';
import type { IFadeProps } from './types';

const Fade = ({ children, style, ...props }: IFadeProps, ref?: any) => {
  const { in: animationState, entryDuration, exitDuration } = useThemeProps(
    'Fade',
    props
  );
  return (
    <Transition
      initial={{ opacity: 0 }}
      entry={{ opacity: 1, transition: { duration: entryDuration } }}
      exit={{ opacity: 0, transition: { duration: exitDuration } }}
      style={style}
      visible={animationState}
      ref={ref}
    >
      {children}
    </Transition>
  );
};

export default React.memo(React.forwardRef(Fade));
