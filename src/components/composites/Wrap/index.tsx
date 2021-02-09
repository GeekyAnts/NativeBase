import isNil from 'lodash/isNil';
import React from 'react';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import { useThemeProps } from '../../../hooks';
import {
  customBackground,
  customBorder,
  customExtra,
  customFlexBox,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
} from '../../../utils/customProps';
import Box from '../../primitives/Box';
import type { IWrapProps } from './types';

const StyledWrap = styled(Box)<IWrapProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  customFlexBox
);
const Wrap = ({
  style,
  spacing,
  children,
  direction,
  align,
  justify,
  grow,
  basis,
  ...props
}: IWrapProps) => {
  let newProps = useThemeProps('Wrap', props);
  return (
    <StyledWrap
      {...newProps}
      flexDirection={direction}
      alignItems={align}
      justifyContent={justify}
      flexGrow={grow}
      flexBasis={basis}
      style={style}
    >
      {isNil(spacing)
        ? children
        : React.Children.map(children, (child: any) => {
            return React.cloneElement(
              child,
              { ...props, style: { margin: spacing } },
              child.props.children
            );
          })}
    </StyledWrap>
  );
};

export default React.memo(Wrap);
export type { IWrapProps };
