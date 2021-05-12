import React, { memo, forwardRef } from 'react';
import { Platform } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { PopoverContext } from './PopoverContext';

const PopoverHeader = (props: IBoxProps, ref?: any) => {
  const newProps = usePropsResolution('PopoverHeader', props);
  const { setHeaderMounted, headerId } = React.useContext(PopoverContext);

  React.useEffect(() => {
    setHeaderMounted(true);
    return () => {
      setHeaderMounted(false);
    };
  }, [setHeaderMounted]);
  return (
    <Box
      //@ts-ignore
      accessibilityRole={Platform.OS === 'web' ? 'banner' : undefined}
      nativeID={headerId}
      {...newProps}
      {...props}
      ref={ref}
    />
  );
};

export default memo(forwardRef(PopoverHeader));
