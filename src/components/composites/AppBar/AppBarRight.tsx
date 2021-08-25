import React from 'react';
import { HStack, IStackProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const AppBarRight = (props: IStackProps) => {
  const { color } = useThemeProps('AppBar', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <HStack
      alignItems="center"
      justifyContent="flex-end"
      _text={{
        color,
      }}
      {...props}
    />
  );
};

export default React.memo(AppBarRight);
