import { usePropsResolution } from '../../../hooks';
import React from 'react';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { PopoverContext } from './PopoverContext';

const PopoverBody = (props: IBoxProps, ref?: any) => {
  const resolvedProps = usePropsResolution('PopoverBody', props);
  const { setBodyMounted, bodyId } = React.useContext(PopoverContext);

  React.useEffect(() => {
    setBodyMounted(true);
    return () => {
      setBodyMounted(false);
    };
  }, [setBodyMounted]);

  return <Box nativeID={bodyId} {...resolvedProps} {...props} ref={ref} />;
};

export default React.memo(React.forwardRef(PopoverBody));
