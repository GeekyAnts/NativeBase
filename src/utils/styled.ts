import styled from 'styled-components/native';
import {
  customBackground,
  customBorder,
  customColor,
  customExtra,
  customFlexBox,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
  customSpace,
  customTypography,
} from './customProps';

export const resolversForBox: any = [
  customColor,
  customSpace,
  customLayout,
  customFlexBox,
  customBorder,
  customPosition,
  customTypography,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
];
// @ts-ignore
export const makeStyledBox = (Comp: any) => styled(Comp)(...resolversForBox);
