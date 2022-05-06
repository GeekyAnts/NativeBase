import { usePropsResolution } from '../../../hooks';
import React, { useContext, memo, forwardRef, useEffect } from 'react';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { PopoverContext } from './PopoverContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const PopoverBody = (props: IBoxProps, ref?: any) => {
  const resolvedProps = usePropsResolution('PopoverBody', props);
  const { setBodyMounted, bodyId } = useContext(PopoverContext);

  useEffect(() => {
    setBodyMounted(true);
    return () => {
      setBodyMounted(false);
    };
  }, [setBodyMounted]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box nativeID={bodyId} {...resolvedProps} ref={ref} />;
};

export default memo(forwardRef(PopoverBody));
