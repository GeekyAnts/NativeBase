import React from 'react';
import { ScrollView as RNScrollView } from 'react-native';

import { usePropsResolution, useTheme } from '../../../hooks';
import { makeStyledBox, resolversForBox } from '../../../utils/styled';

const StyledScrollView: any = makeStyledBox(RNScrollView);

// let styledSystemResolvers = [color, typography, customTypography];
const useStyledSystemPropsResolver = (props: any) => {
  const theme = useTheme();
  const propsWithTheme = { ...props, theme };
  let styleObject = {};
  resolversForBox.forEach((resolver: any) => {
    styleObject = { ...styleObject, ...resolver(propsWithTheme) };
  });
  return styleObject;
};

export const ScrollView = ({ children, ...props }: any) => {
  const { _contentContainerStyle, ...resolvedProps } = usePropsResolution(
    'View',
    props
  );

  return (
    <StyledScrollView
      {...resolvedProps}
      contentContainerStyle={useStyledSystemPropsResolver(
        _contentContainerStyle
      )}
    >
      {children}
    </StyledScrollView>
  );
};
