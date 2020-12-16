import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from '../../../utils/customProps';

import type { IDividerProps } from './props';
import { usePropsConfig } from '../../../hooks';

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
  let newProps = usePropsConfig('Divider', props);

  return <StyledDivider {...orientationProps} {...newProps} style={style} />;
};

export default Divider;
export type { IDividerProps };
