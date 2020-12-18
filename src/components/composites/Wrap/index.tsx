import isNil from 'lodash/isNil';
import React from 'react';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space, position } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customFlexBox,
  customPosition,
} from '../../../utils/customProps';
import type { IWrapProps } from './props';
import { usePropsConfig } from '../../../hooks';
import Box from '../../primitives/Box';

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
  let newProps = usePropsConfig('Wrap', props);
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

export default Wrap;
export type { IWrapProps };
