import styled from 'styled-components/native';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
  customTypography,
} from './customProps';
import React from 'react';
import { usePropsResolution, useStyledSystemPropsResolver } from '../hooks/';
import type { StyledProps } from '../theme/types';
import type { PlatformProps, VariantType } from '../components/types';
import type { ITheme } from 'lib/typescript';
export const resolversForBox: any = [
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  typography,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customTypography,
  customLayout,
];

export const shouldEnableNewStyledSystemImplementation = true;

export const makeStyledComponent = (Comp: any) => {
  if (shouldEnableNewStyledSystemImplementation) {
    return React.forwardRef(({ debug, ...props }: any, ref: any) => {
      const [style, restProps] = useStyledSystemPropsResolver(props);
      if (debug) {
        /* eslint-disable-next-line */
        console.log('style:: => ', style, ' restProps:: => ', restProps);
      }
      return (
        <Comp {...restProps} style={style} ref={ref}>
          {props.children}
        </Comp>
      );
    });
  } else {
    //@ts-ignore
    return styled(Comp)(...resolversForBox);
  }
};

export function FactoryV2<T, K extends keyof ITheme['components']>(
  Comp: React.ComponentType<T>,
  name: K
) {
  const StyledComponent = makeStyledComponent(Comp);
  return React.forwardRef(
    (
      props: React.ComponentProps<typeof Comp> &
        StyledProps &
        PlatformProps<StyledProps> & { variant: VariantType<K> },

      ref
    ) => {
      const resolvedProps = usePropsResolution(name, props);
      return <StyledComponent {...resolvedProps} ref={ref} />;
    }
  );
}
