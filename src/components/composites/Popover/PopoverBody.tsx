import { usePropsResolution } from '../../../hooks';
import React from 'react';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { PopoverContext } from './PopoverContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const PopoverBody = (props: IBoxProps, ref?: any) => {
  const resolvedProps = usePropsResolution('PopoverBody', props);
  const { setBodyMounted, bodyId } = React.useContext(PopoverContext);

  React.useEffect(() => {
    setBodyMounted(true);
    return () => {
      setBodyMounted(false);
    };
  }, [setBodyMounted]);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box nativeID={bodyId} {...resolvedProps} {...props} ref={ref} />;
};

export default React.memo(React.forwardRef(PopoverBody));
