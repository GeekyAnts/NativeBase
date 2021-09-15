import React, { memo, forwardRef } from 'react';
import { Platform } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { PopoverContext } from './PopoverContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const PopoverHeader = (props: IBoxProps, ref?: any) => {
  const resolvedProps = usePropsResolution('PopoverHeader', props);
  const { setHeaderMounted, headerId } = React.useContext(PopoverContext);

  React.useEffect(() => {
    setHeaderMounted(true);
    return () => {
      setHeaderMounted(false);
    };
  }, [setHeaderMounted]);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box
      //@ts-ignore
      accessibilityRole={Platform.OS === 'web' ? 'banner' : undefined}
      nativeID={headerId}
      {...resolvedProps}
      ref={ref}
    />
  );
};

export default memo(forwardRef(PopoverHeader));
