import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
  position,
} from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
  customPosition,
} from '../../../utils/customProps';
import { useThemeProps } from '../../../hooks';
import type { IHeadingProps } from './types';

// Can remove all this and extend it from normal Text
const StyledHeading = styled(Text)<IHeadingProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  customTypography
);

const Heading = ({ isTruncated, ...props }: IHeadingProps, ref: any) => {
  const newProps = useThemeProps('Heading', props);
  return (
    <StyledHeading
      numberOfLines={isTruncated ? 1 : 999999}
      {...newProps}
      ref={ref}
    />
  );
};

export default React.memo(React.forwardRef(Heading));
export type { IHeadingProps };
