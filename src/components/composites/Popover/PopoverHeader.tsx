import React, { memo, forwardRef, useEffect, useContext } from 'react';
import { usePropsResolution } from '../../../hooks';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { PopoverContext } from './PopoverContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const PopoverHeader = (props: IBoxProps, ref?: any) => {
  const resolvedProps = usePropsResolution('PopoverHeader', props);
  const { setHeaderMounted, headerId } = useContext(PopoverContext);

  useEffect(() => {
    setHeaderMounted(true);
    return () => {
      setHeaderMounted(false);
    };
  }, [setHeaderMounted]);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box nativeID={headerId} {...resolvedProps} ref={ref} />;
};

export default memo(forwardRef(PopoverHeader));
