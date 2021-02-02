import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';
import { useThemeProps } from '../../../hooks';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customShadow,
} from '../../../utils/customProps';
import type { IDividerProps } from './types';

const StyledDivider = styled(View)<IDividerProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);
const Divider = ({ style, orientation, ...props }: IDividerProps) => {
  let orientationProps =
    orientation === 'vertical'
      ? {
          width: 0,
          height: '100%',
        }
      : {
          width: '100%',
          height: 0,
        };
  let newProps = useThemeProps('Divider', props);

  return <StyledDivider {...orientationProps} {...newProps} style={style} />;
};

export default React.memo(Divider);
export type { IDividerProps };
