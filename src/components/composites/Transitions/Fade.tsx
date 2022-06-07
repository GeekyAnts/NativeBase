import React from 'react';
import PresenceTransition from '../Transitions/PresenceTransition';
import type { IFadeProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/';
import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';

const Fade = ({ children, ...props }: IFadeProps, ref?: any) => {
  const { colorMode } = useColorMode();

  const {
    style,
    unResolvedProps,
    restDefaultProps,
    styleFromProps,
  } = getThemeProps('Fade', colorMode, {}, props);

  const { in: animationState, ...resolvedProps } = {
    ...restDefaultProps,
    ...usePropsResolution('Fade', {
      ...unResolvedProps,
      ...props,
    }),
  };
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  // console.log('^^^^^^^', resolvedProps, animationState);
  return (
    <PresenceTransition
      visible={animationState}
      {...resolvedProps}
      ref={ref}
      INTERNAL_themeStyle={style}
    >
      {children}
    </PresenceTransition>
  );
};

export default React.memo(React.forwardRef(Fade));
